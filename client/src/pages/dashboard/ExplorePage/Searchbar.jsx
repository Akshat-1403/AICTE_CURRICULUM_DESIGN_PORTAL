import FilterSearch from '../../../components/FilterSearch'
import FilterDropdown from '../../../components/FilterDropdown'

export default function TemplatePageFilter() {

  return (
    <nav className="w-full flex justify-evenly my-2">
        <FilterSearch 
            name="Explore1"
            placeholder={"Seach topics,curriculums etc"}
        />
        <FilterDropdown
          name="Explore2"
          defaultValue="Select Level"
          list={["Diploma", "Undergraduate (UG)", "Postgraduate (PG)"]}
        />
        <FilterDropdown
          name="Explore3"
          defaultValue="Select Program"
          list={[
            "Applied Arts and Crafts", 
            "Architecture and Town Planning", 
            "Architecture", 
            "Town Planning", 
            "Engineering & Technology", 
            "Hotel Management and Catering", 
            "Management", 
            "MCA", 
            "Pharmacy"
          ]}
        />
    </nav>
  )
}
