import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Plus, 
  Trash2, 
  Edit3, 
  Search as SearchIcon, 
  LogOut, 
  User, 
  Lock, 
  FileText, 
  Image as ImageIcon, 
  Tag, 
  Eye, 
  CheckCircle2, 
  AlertCircle,
  Mail as MailIcon,
  Globe as GlobeIcon,
  ShoppingBag as ShoppingBagIcon
} from 'lucide-react';
import { db } from '@/lib/firebase';
import { 
  collection, 
  addDoc, 
  getDocs, 
  updateDoc, 
  deleteDoc, 
  doc, 
  query, 
  orderBy, 
  serverTimestamp,
  Timestamp 
} from 'firebase/firestore';
import { handleFirestoreError, OperationType } from '@/lib/firestoreUtils';
import { Button } from '@/components/ui/button';

interface BlogPost {
  id: string;
  title: string;
  content: string;
  category: string;
  imageUrl: string;
  status: 'published' | 'draft';
  author: string;
  createdAt: any;
}

interface Lead {
  id: string;
  email: string;
  url: string;
  status: string;
  createdAt: any;
}

interface Order {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  status: string;
  createdAt: any;
}

export default function Admin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState<'blogs' | 'leads' | 'orders'>('blogs');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentBlog, setCurrentBlog] = useState<Partial<BlogPost> | null>(null);

  // Form states
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    category: '',
    imageUrl: '',
    status: 'draft' as 'published' | 'draft',
    author: 'Admin'
  });

  useEffect(() => {
    const authStatus = localStorage.getItem('isAdminLoggedIn');
    if (authStatus === 'true') {
      setIsLoggedIn(true);
      fetchData();
    }
  }, []);

  const fetchData = async () => {
    setIsLoading(true);
    await Promise.all([fetchBlogs(), fetchLeads(), fetchOrders()]);
    setIsLoading(false);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin123') {
      setIsLoggedIn(true);
      localStorage.setItem('isAdminLoggedIn', 'true');
      fetchData();
    } else {
      setLoginError('Invalid credentials');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isAdminLoggedIn');
  };

  const fetchBlogs = async () => {
    const path = 'blogs';
    try {
      const q = query(collection(db, path), orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      const fetchedBlogs = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as BlogPost[];
      setBlogs(fetchedBlogs);
    } catch (error) {
      handleFirestoreError(error, OperationType.GET, path);
    }
  };

  const fetchLeads = async () => {
    const path = 'leads';
    try {
      const q = query(collection(db, path), orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      const fetchedLeads = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Lead[];
      setLeads(fetchedLeads);
    } catch (error) {
      console.warn("Could not fetch leads:", error);
    }
  };

  const fetchOrders = async () => {
    const path = 'orders';
    try {
      const q = query(collection(db, path), orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      const fetchedOrders = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Order[];
      setOrders(fetchedOrders);
    } catch (error) {
      console.warn("Could not fetch orders:", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const path = 'blogs';
    try {
      if (currentBlog?.id) {
        // Update
        const blogRef = doc(db, path, currentBlog.id);
        await updateDoc(blogRef, {
          ...formData,
          updatedAt: serverTimestamp()
        });
      } else {
        // Create
        await addDoc(collection(db, path), {
          ...formData,
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp()
        });
      }
      setIsModalOpen(false);
      setFormData({
        title: '',
        content: '',
        category: '',
        imageUrl: '',
        status: 'draft',
        author: 'Admin'
      });
      setCurrentBlog(null);
      fetchBlogs();
    } catch (error) {
      handleFirestoreError(error, OperationType.WRITE, path);
    }
  };

  const handleDeleteLead = async (id: string) => {
    if (!window.confirm('Delete this lead?')) return;
    const path = 'leads';
    try {
      await deleteDoc(doc(db, path, id));
      fetchLeads();
    } catch (error) {
      handleFirestoreError(error, OperationType.DELETE, path);
    }
  };

  const handleDeleteOrder = async (id: string) => {
    if (!window.confirm('Delete this order?')) return;
    const path = 'orders';
    try {
      await deleteDoc(doc(db, path, id));
      fetchOrders();
    } catch (error) {
      handleFirestoreError(error, OperationType.DELETE, path);
    }
  };
  const handleDelete = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this blog?')) return;
    const path = 'blogs';
    try {
      await deleteDoc(doc(db, path, id));
      fetchBlogs();
    } catch (error) {
      handleFirestoreError(error, OperationType.DELETE, path);
    }
  };

  const openForm = (blog?: BlogPost) => {
    if (blog) {
      setCurrentBlog(blog);
      setFormData({
        title: blog.title,
        content: blog.content,
        category: blog.category,
        imageUrl: blog.imageUrl,
        status: blog.status,
        author: blog.author
      });
    } else {
      setCurrentBlog(null);
      setFormData({
        title: '',
        content: '',
        category: '',
        imageUrl: '',
        status: 'draft',
        author: 'Admin'
      });
    }
    setIsModalOpen(true);
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a] px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-10 rounded-[2.5rem] w-full max-w-md shadow-2xl"
        >
          <div className="mb-8 text-center">
            <div className="w-16 h-16 bg-[#0047ff] rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Lock className="text-white h-8 w-8" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">Admin Login</h1>
            <p className="text-gray-500 mt-2">Enter credentials to manage blogs</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">Username</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input 
                  type="text" 
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-[#0047ff]"
                  placeholder="admin"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-[#0047ff]"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>
            {loginError && (
              <p className="text-red-500 text-sm font-medium text-center">{loginError}</p>
            )}
            <Button type="submit" className="w-full py-4 rounded-2xl bg-[#0047ff] hover:bg-[#0037cc] text-white font-bold text-lg shadow-lg shadow-blue-500/20">
              Sign In
            </Button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Admin Nav */}
      <nav className="bg-white border-b border-gray-100 py-6 sticky top-0 z-50">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-[#0047ff] rounded-xl flex items-center justify-center">
              <FileText className="text-white h-6 w-6" />
            </div>
            <h1 className="text-xl font-bold text-gray-900 tracking-tight">Blog Manager</h1>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-gray-500 text-sm font-medium">Logged in as <span className="text-gray-900 font-bold">Admin</span></span>
            <button 
              onClick={handleLogout}
              className="flex items-center gap-2 text-gray-400 hover:text-red-500 transition-colors font-bold text-sm"
            >
              <LogOut className="h-4 w-4" /> Sign Out
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 flex-grow">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 gap-6">
          <div className="flex items-center gap-4 bg-white p-2 rounded-2xl shadow-sm">
            <button 
              onClick={() => setActiveTab('blogs')}
              className={`px-8 py-4 rounded-xl font-bold transition-all ${activeTab === 'blogs' ? 'bg-[#0047ff] text-white shadow-lg' : 'text-gray-400 hover:text-gray-600'}`}
            >
              Blogs
            </button>
            <button 
              onClick={() => setActiveTab('leads')}
              className={`px-8 py-4 rounded-xl font-bold transition-all ${activeTab === 'leads' ? 'bg-[#0047ff] text-white shadow-lg' : 'text-gray-400 hover:text-gray-600'}`}
            >
              Leads
              {leads.length > 0 && (
                <span className="ml-2 bg-red-500 text-white text-[10px] px-2 py-0.5 rounded-full">{leads.length}</span>
              )}
            </button>
            <button 
              onClick={() => setActiveTab('orders')}
              className={`px-8 py-4 rounded-xl font-bold transition-all ${activeTab === 'orders' ? 'bg-[#0047ff] text-white shadow-lg' : 'text-gray-400 hover:text-gray-600'}`}
            >
              Orders
              {orders.length > 0 && (
                <span className="ml-2 bg-[#d9ff00] text-black text-[10px] px-2 py-0.5 rounded-full">{orders.length}</span>
              )}
            </button>
          </div>
          {activeTab === 'blogs' && (
            <Button 
              onClick={() => openForm()}
              className="bg-[#0047ff] hover:bg-[#0037cc] text-white px-8 py-6 rounded-2xl font-bold flex items-center gap-3 shadow-xl shadow-blue-500/20"
            >
              <Plus className="h-6 w-6" /> Create New Post
            </Button>
          )}
        </div>

        {activeTab === 'blogs' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {isLoading ? (
              [...Array(6)].map((_, i) => (
                <div key={i} className="bg-white h-96 rounded-[2.5rem] animate-pulse border border-gray-100" />
              ))
            ) : blogs.length === 0 ? (
              <div className="col-span-full py-32 text-center bg-white rounded-[3rem] border-2 border-dashed border-gray-200">
                <FileText className="h-16 w-16 text-gray-300 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">No blogs found</h3>
                <p className="text-gray-500">Start by creating your first blog post.</p>
              </div>
            ) : (
              blogs.map((blog) => (
                <motion.div 
                  layout
                  key={blog.id} 
                  className="bg-white rounded-[2.5rem] border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all group"
                >
                  <div className="relative h-48 overflow-hidden bg-gray-100">
                    {blog.imageUrl ? (
                      <img 
                        src={blog.imageUrl} 
                        alt={blog.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-300">
                        <ImageIcon className="h-12 w-12" />
                      </div>
                    )}
                    <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${blog.status === 'published' ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600'}`}>
                      {blog.status}
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-2 text-[#0047ff] text-[10px] font-bold uppercase tracking-widest mb-3">
                      <Tag className="h-3 w-3" /> {blog.category}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 line-clamp-2 leading-tight">{blog.title}</h3>
                    <p className="text-gray-500 text-sm mb-8 line-clamp-3 leading-relaxed">{blog.content}</p>
                    
                    <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                      <div className="flex items-center gap-2">
                        <button 
                          onClick={() => openForm(blog)}
                          className="p-3 bg-gray-50 text-gray-400 hover:bg-[#0047ff] hover:text-white rounded-xl transition-all"
                        >
                          <Edit3 className="h-5 w-5" />
                        </button>
                        <button 
                           onClick={() => handleDelete(blog.id)}
                          className="p-3 bg-gray-50 text-gray-400 hover:bg-red-500 hover:text-white rounded-xl transition-all"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>
                      <span className="text-[10px] text-gray-400 font-medium">
                        {blog.createdAt?.toDate ? blog.createdAt.toDate().toLocaleDateString() : 'Just now'}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </div>
        ) : activeTab === 'leads' ? (
          <div className="grid grid-cols-1 gap-6">
            {isLoading ? (
               [...Array(3)].map((_, i) => (
                <div key={i} className="bg-white h-32 rounded-[2.5rem] animate-pulse border border-gray-100" />
              ))
            ) : leads.length === 0 ? (
              <div className="py-32 text-center bg-white rounded-[3rem] border-2 border-dashed border-gray-200">
                <MailIcon className="h-16 w-16 text-gray-300 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">No leads yet</h3>
                <p className="text-gray-500">Wait for your first audit request.</p>
              </div>
            ) : (
              leads.map((lead) => (
                <motion.div 
                  layout
                  key={lead.id}
                  className="bg-white p-6 rounded-3xl border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center">
                      <GlobeIcon className="h-6 w-6 text-[#0047ff]" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-0.5">Website</p>
                      <a href={lead.url} target="_blank" rel="noopener noreferrer" className="text-xl font-black text-gray-900 hover:text-[#0047ff] transition-colors flex items-center gap-2">
                        {lead.url} <SearchIcon className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-right hidden md:block">
                      <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-0.5">Email</p>
                      <p className="font-bold text-gray-900">{lead.email}</p>
                    </div>
                    <div className="h-12 w-px bg-gray-100 hidden md:block" />
                    <div className="text-right">
                      <p className="text-[10px] text-gray-400 font-bold uppercase mb-1">
                        {lead.createdAt?.toDate ? lead.createdAt.toDate().toLocaleString() : 'Recent'}
                      </p>
                      <button 
                        onClick={() => handleDeleteLead(lead.id)}
                        className="p-3 bg-red-50 text-red-500 hover:bg-red-500 hover:text-white rounded-xl transition-all"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6">
            {isLoading ? (
               [...Array(3)].map((_, i) => (
                <div key={i} className="bg-white h-32 rounded-[2.5rem] animate-pulse border border-gray-100" />
              ))
            ) : orders.length === 0 ? (
              <div className="py-32 text-center bg-white rounded-[3rem] border-2 border-dashed border-gray-200">
                <ShoppingBagIcon className="h-16 w-16 text-gray-300 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">No orders yet</h3>
                <p className="text-gray-500">Wait for your first service inquiry.</p>
              </div>
            ) : (
              orders.map((order) => (
                <motion.div 
                  layout
                  key={order.id}
                  className="bg-white p-6 rounded-3xl border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center">
                      <ShoppingBagIcon className="h-6 w-6 text-[#0047ff]" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-0.5">Service</p>
                      <p className="text-xl font-black text-gray-900">{order.service}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-8">
                    <div>
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Customer</p>
                      <p className="text-sm font-bold text-gray-900">{order.name}</p>
                      <p className="text-xs text-gray-500">{order.email}</p>
                    </div>
                    <div className="h-8 w-px bg-gray-100 hidden lg:block" />
                    <div>
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Phone</p>
                      <p className="text-sm font-bold text-gray-900">{order.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="text-right">
                      <p className="text-[10px] text-gray-400 font-bold uppercase mb-1">
                        {order.createdAt?.toDate ? order.createdAt.toDate().toLocaleString() : 'Recent'}
                      </p>
                      <button 
                        onClick={() => handleDeleteOrder(order.id)}
                        className="p-3 bg-red-50 text-red-500 hover:bg-red-500 hover:text-white rounded-xl transition-all"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </div>
        )}
      </main>

      {/* Form Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center px-4 overflow-y-auto pt-20 pb-10">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsModalOpen(false)}
            />
            <motion.div 
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="bg-white rounded-[3rem] w-full max-w-2xl overflow-hidden shadow-2xl relative z-70"
            >
              <div className="p-8 lg:p-12">
                <div className="flex justify-between items-start mb-10">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">
                      {currentBlog ? 'Edit Post' : 'Create Post'}
                    </h3>
                    <p className="text-gray-500">Fill in the details for your blog post.</p>
                  </div>
                  <button 
                    onClick={() => setIsModalOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <Plus className="h-8 w-8 text-gray-400 rotate-45" />
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-bold text-gray-700 mb-3 uppercase tracking-wider">Title</label>
                      <input 
                        type="text" 
                        value={formData.title}
                        onChange={(e) => setFormData({...formData, title: e.target.value})}
                        className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-[#0047ff]"
                        placeholder="Expert SEO Strategies for 2024"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-3 uppercase tracking-wider">Category</label>
                      <select 
                        value={formData.category}
                        onChange={(e) => setFormData({...formData, category: e.target.value})}
                        className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-[#0047ff]"
                        required
                      >
                        <option value="">Select Category</option>
                        <option value="SEO">SEO</option>
                        <option value="AEO">AEO</option>
                        <option value="GEO">GEO</option>
                        <option value="Case Study">Case Study</option>
                        <option value="Tech">Tech</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-3 uppercase tracking-wider">Status</label>
                      <div className="flex gap-4">
                        {['draft', 'published'].map((status) => (
                          <button
                            key={status}
                            type="button"
                            onClick={() => setFormData({...formData, status: status as any})}
                            className={`flex-grow py-4 rounded-2xl font-bold text-sm uppercase tracking-wider transition-all border ${formData.status === status ? 'bg-gray-900 text-white border-gray-900' : 'bg-white text-gray-400 border-gray-100 hover:border-gray-200'}`}
                          >
                            {status}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-bold text-gray-700 mb-3 uppercase tracking-wider">Image URL</label>
                      <div className="relative">
                        <ImageIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input 
                          type="url" 
                          value={formData.imageUrl}
                          onChange={(e) => setFormData({...formData, imageUrl: e.target.value})}
                          className="w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-[#0047ff]"
                          placeholder="https://images.unsplash.com/..."
                        />
                      </div>
                      <p className="text-[10px] text-gray-400 mt-2 px-2 italic">Use a public image URL from Unsplash or similar services.</p>
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-bold text-gray-700 mb-3 uppercase tracking-wider">Content</label>
                      <textarea 
                        value={formData.content}
                        onChange={(e) => setFormData({...formData, content: e.target.value})}
                        rows={6}
                        className="w-full px-6 py-4 rounded-3xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-[#0047ff] resize-none"
                        placeholder="Write your article content here..."
                        required
                      />
                    </div>
                  </div>

                  <div className="flex gap-4 pt-6">
                    <Button 
                      type="button" 
                      variant="outline"
                      onClick={() => setIsModalOpen(false)}
                      className="flex-grow py-6 rounded-2xl border-gray-200 text-gray-600 font-bold"
                    >
                      Cancel
                    </Button>
                    <Button 
                      type="submit" 
                      className="flex-grow py-6 rounded-2xl bg-[#0047ff] hover:bg-[#0037cc] text-white font-bold text-lg shadow-xl shadow-blue-500/20"
                    >
                      {currentBlog ? 'Update Post' : 'Publish Post'}
                    </Button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
