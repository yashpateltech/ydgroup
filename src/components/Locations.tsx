export default function Locations() {
  const regions = [
    ["Afghanistan", "Albania", "Algeria", "Angola", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belgium", "Belize", "Bermuda", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil"],
    ["Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Estonia", "Ethiopia", "Faroe Islands", "Fiji", "Finland", "France", "Georgia", "Germany", "Ghana", "Greece", "Guatemala", "Honduras", "Hong Kong", "Hungary", "Iceland", "India"],
    ["Liechtenstein", "Lithuania", "Luxembourg", "Macao", "Macedonia (FYRO)", "Malaysia", "Malta", "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Namibia", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Nigeria"],
    ["Rwanda", "Saint Kitts and Nevis", "Saudi Arabia", "Senegal", "Serbia", "Singapore", "Slovakia", "Slovenia", "South Africa", "Spain", "Sri Lanka", "Sweden", "Switzerland", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Trinidad and Tobago", "Tunisia", "Turkey"]
  ];

  return (
    <section className="py-16 bg-[#f8f9fa] border-t border-b">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Is YDGROUPS available in my location?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            YDGROUPS is commercially available in 140 countries and regions, including those listed below. YDGROUPS free account, free services, and USD 200 credit don't include sovereign cloud products in specific government and restricted regions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {regions.map((col, i) => (
            <ul key={i} className="space-y-2">
              {col.map((country, j) => (
                <li key={j} className="text-sm text-gray-600 flex items-center gap-2">
                  <span className="h-1 w-1 bg-gray-400 rounded-full" />
                  {country}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
