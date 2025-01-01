const menuItems = document.querySelectorAll('.menu-item');
const contentSection = document.getElementById('content');
const sectionTitle = document.getElementById('section-title');
const sectionContent = document.getElementById('section-content');

// Data for each section
const sectionData = {
  "water-quality": {
    title: "Water Quality Modeling",
    content: "This section covers the modeling of water resources to ensure sustainable and safe water usage."
  },
  "water-treatment": {
    title: "Water and Wastewater Treatment",
    content: "Learn about advanced technologies and processes used in water and wastewater treatment."
  },
  "waste-management": {
    title: "Waste Management",
    content: "Explore methods for reducing, reusing, and recycling waste materials to protect the environment."
  },
  "air-pollution": {
    title: "Air Pollution",
    content: "Understand the causes and mitigation strategies for air pollution in urban and industrial areas."
  }
};

// Event listener for menu items
menuItems.forEach(item => {
  item.addEventListener('click', () => {
    const section = item.dataset.section;

    if (sectionData[section]) {
      sectionTitle.textContent = sectionData[section].title;
      sectionContent.textContent = sectionData[section].content;

      contentSection.classList.remove('hidden');
    }
  });
});
