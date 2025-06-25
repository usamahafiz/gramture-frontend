// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { fireStore } from "../../config/firebase";
// import {
//   collection,
//   query,
//   where,
//   getDocs,
// } from "firebase/firestore";
// import "../../assets/css/notes.css";

// const Notes = () => {
//   const { selectedClass, category, subcategory } = useParams();
//   const navigate = useNavigate();

//   const [categories, setCategories] = useState([]);
//   const [contentTypes, setContentTypes] = useState([]);
//   const [topics, setTopics] = useState({});
//   const [loading, setLoading] = useState(false);

//   const [opencategoryId, setOpencategoryId] = useState(null);
//   const [activeContentType, setActiveContentType] = useState(subcategory);

//   // Scroll to top on load
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   // Sync category/subcategory from URL
//   useEffect(() => {
//     if (category) {
//       const categoryIndex = categories.findIndex(
//         (c) => c.toLowerCase() === category.toLowerCase()
//       );
//       setOpencategoryId(categoryIndex >= 0 ? categoryIndex : null);
//     }

//     if (subcategory && category) {
//       setActiveContentType(subcategory);
//       fetchTopics(category, subcategory);
//     }
//   }, [category, subcategory, selectedClass, categories]);

//   // Fetch categories
//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const snapshot = await getDocs(collection(fireStore, "categories"));
//         const catList = snapshot.docs.map((doc) => doc.data().name);
//         setCategories(catList);
//       } catch (error) {
//         console.error("Error fetching categories:", error);
//       }
//     };

//     fetchCategories();
//   }, []);

//   // Fetch content types (subcategory) for the selected category
//   useEffect(() => {
//     const fetchContentTypes = async () => {
//       try {
//         const q = query(collection(fireStore, "contentTypes"));
//         const snapshot = await getDocs(q);
//         const allContentTypes = snapshot.docs.map((doc) => doc.data());

//         // Filter based on opened category
//         if (category) {
//           const filtered = allContentTypes.filter(
//             (ct) => ct.category.toLowerCase() === category.toLowerCase()
//           );
//           setContentTypes(filtered);
//         } else {
//           setContentTypes(allContentTypes);
//         }
//       } catch (error) {
//         console.error("Error fetching content types:", error);
//       }
//     };

//     fetchContentTypes();
//   }, [category]);

//   const fetchTopics = async (cat, type) => {
//     setLoading(true);
//     try {
//       const q = query(
//         collection(fireStore, "topics"),
//         where("class", "==", selectedClass),
//         where("category", "==", cat.trim().toLowerCase()),
//         where("contentType", "==", type.trim().toLowerCase())
//       );

//       const snapshot = await getDocs(q);
//       const topicData = {};
//       snapshot.forEach((doc) => {
//         const data = doc.data();
//         if (data.topic) topicData[data.topic] = data.fileUrls || [];
//       });

//       setTopics(topicData);
//     } catch (error) {
//       console.error("Error fetching topics:", error);
//     }
//     setLoading(false);
//   };

//   const handlecategoryClick = (categoryName, index) => {
//     const newOpenId = opencategoryId === index ? null : index;
//     setOpencategoryId(newOpenId);

//     if (newOpenId !== null) {
//       navigate(`/notes/${selectedClass}/${categoryName.toLowerCase()}`);
//     } else {
//       navigate(`/notes/${selectedClass}`);
//     }

//     if (opencategoryId !== index) {
//       setActiveContentType(null);
//       setTopics({});
//     }
//   };

//   const handleContentTypeClick = (categoryName, type) => {
//     setActiveContentType(type);
//     navigate(`/notes/${selectedClass}/${categoryName.toLowerCase()}/${type}`);
//     fetchTopics(categoryName, type);
//   };

//   const handleTopicClick = (topicName) => {
//     const fileData = topics[topicName]?.[0];
//     let fileUrl = "";

//     if (typeof fileData === "string") {
//       fileUrl = fileData;
//     } else if (fileData && typeof fileData === "object") {
//       fileUrl = fileData.url || fileData.fileUrl || "";
//     }

//     if (fileUrl && typeof fileUrl === "string") {
//       navigate(`/preview?url=${encodeURIComponent(fileUrl)}`);
//     } else {
//       console.warn("No valid file URL found for topic:", topicName);
//     }
//   };

//   return (
//     <div className="notes-container">
//       <main>
//         <h2>Welcome to Our Educational Portal</h2>
//         <p className="intro-text text-center py-3 fw-bold">
//           Our goal is to provide high-quality educational resources.
//         </p>

//         <div className="categorys-grid">
//           {categories.map((categoryName, index) => (
//             <div
//               key={index}
//               className={`category-card ${
//                 opencategoryId === index ? "active" : ""
//               }`}
//             >
//               <div
//                 className="category-header"
//                 onClick={() => handlecategoryClick(categoryName, index)}
//               >
//                 <span>{categoryName}</span>
//                 <span>{opencategoryId === index ? "▼" : "►"}</span>
//               </div>

//               <div
//                 className={`dropdown-container ${
//                   opencategoryId === index ? "visible" : ""
//                 }`}
//               >
//                 <div className="dropdown-content">
//                   {contentTypes.map(({ label, value }) => (
//                     <div key={value}>
//                       <div
//                         className={`content-type ${
//                           activeContentType === value ? "active" : ""
//                         }`}
//                         onClick={() =>
//                           handleContentTypeClick(categoryName, value)
//                         }
//                       >
//                         {label}
//                       </div>

//                       {activeContentType === value && (
//                         <div className="topics-list">
//                           {loading ? (
//                             <div className="loading">Loading...</div>
//                           ) : Object.keys(topics).length > 0 ? (
//                             Object.keys(topics).map((topicName, i) => (
//                               <div
//                                 key={i}
//                                 className="topic-item"
//                                 onClick={() => handleTopicClick(topicName)}
//                               >
//                                 📌 {topicName}
//                               </div>
//                             ))
//                           ) : (
//                             <div className="no-topics">No topics available</div>
//                           )}
//                         </div>
//                       )}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Notes

import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fireStore } from "../../config/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import "../../assets/css/notes.css";

const Notes = () => {
  const { selectedClass } = useParams();
  const navigate = useNavigate();

  // Data states
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(false);

  // Selection states
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");

  // Dropdown states
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [showSubcategoryDropdown, setShowSubcategoryDropdown] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchCategories();
    fetchSubCategories();
  }, []);

  // Fetch categories
  const fetchCategories = async () => {
    try {
      const snapshot = await getDocs(collection(fireStore, "categories"));
      const catList = snapshot.docs.map((doc) => doc.data().name);
      setCategories(catList);
      console.log("Categories fetched:", catList);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  // Fetch subcategories
  const fetchSubCategories = async () => {
    try {
      const snapshot = await getDocs(collection(fireStore, "subcategories"));
      const subList = snapshot.docs.map((doc) => doc.data());
      setSubCategories(subList);
      console.log("Subcategories fetched:", subList);
    } catch (error) {
      console.error("Error fetching subcategories:", error);
    }
  };

  // Fetch topics based on selected filters
  const fetchTopics = async (category, subcategory) => {
    if (!selectedClass || !category || !subcategory) return;

    setLoading(true);
    setTopics([]);

    try {
      console.log("Fetching topics for:", {
        class: selectedClass,
        category: category.toLowerCase(),
        subCategory: subcategory.toLowerCase(),
      });

      const q = query(
        collection(fireStore, "topics"),
        where("class", "==", `Class ${selectedClass}`),
        where("category", "==", category),
        where("subCategory", "==", subcategory)
      );

      const snapshot = await getDocs(q);
      const topicsList = [];

      snapshot.forEach((doc) => {
        const data = doc.data();
        if (data.topic) {
          topicsList.push({
            id: doc.id,
            name: data.topic,
            fileUrls: data.notesFile || [],
            description: data.description || "",
          });
        }
      });

      setTopics(topicsList);
      console.log("Topics fetched:", topicsList);
    } catch (error) {
      console.error("Error fetching topics:", error);
    }
    setLoading(false);
  };

  // Handle category selection
  const handleCategorySelect = (category) => {
    console.log("Category selected:", category);
    setSelectedCategory(category);
    setSelectedSubcategory(""); // Reset subcategory
    setTopics([]); // Clear topics
    setShowCategoryDropdown(false);
    setShowSubcategoryDropdown(false);
  };

  // Handle subcategory selection
  const handleSubcategorySelect = (subcategory) => {
    console.log("Subcategory selected:", subcategory);
    setSelectedSubcategory(subcategory);
    setShowSubcategoryDropdown(false);

    // Fetch topics when both category and subcategory are selected
    if (selectedCategory) {
      fetchTopics(selectedCategory, subcategory);
    }
  };

  // Handle topic click
  const handleTopicClick = (topic) => {
    const fileData = topic.notesFile || topic.fileUrls || "";
    let fileUrl = "";

    if (typeof fileData === "string") {
      fileUrl = fileData;
    } else if (fileData && typeof fileData === "object") {
      fileUrl = fileData.url || fileData.fileUrl || "";
    }

    if (fileUrl && typeof fileUrl === "string") {
      navigate(`/preview?url=${encodeURIComponent(fileUrl)}`);
    } else {
      console.warn("No valid file URL found for topic:", topic.name);
    }
  };
  

const handleDescriptionClick = (topic) => {
  const id = encodeURIComponent(topic.id);
  const name = encodeURIComponent(topic.name || "Untitled");
  const description = encodeURIComponent(topic.description || "");

  navigate(`/description?id=${id}&name=${name}&description=${description}`);
};


const handlePreviewClick = (topic) => {
  if (topic.fileUrls) {
    const url = topic.fileUrls;
    const title = encodeURIComponent(topic.name || "Untitled");

    // Don't encode the URL again – let the browser handle it
    navigate(`/preview?url=${url}&title=${title}`);
  } else {
    alert("No file available to preview.");
  }
};




  return (
    <div className="notes-container " style={{ marginTop: "20px" }}>
      <main>
        <h2 className="text-center">Educational Portal - {selectedClass}</h2>
        <p className="intro-text">
          Select a category and subcategory to view available topics.
        </p>

        {/* Selection Interface */}
        <div className="selection-container">
          {/* Category Dropdown */}
          <div className="dropdown-wrapper">
            <label className="dropdown-label">Select Category:</label>
            <div className="custom-dropdown">
              <div
                className={`dropdown-header ${
                  showCategoryDropdown ? "active" : ""
                }`}
                onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
              >
                <span>{selectedCategory || "Choose a category..."}</span>
                <span className="dropdown-arrow">
                  {showCategoryDropdown ? "▲" : "▼"}
                </span>
              </div>

              {showCategoryDropdown && (
                <div className="dropdown-options">
                  {categories.map((category, index) => (
                    <div
                      key={index}
                      className={`dropdown-option ${
                        selectedCategory === category ? "selected" : ""
                      }`}
                      onClick={() => handleCategorySelect(category)}
                    >
                      {category}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Subcategory Dropdown - Only show if category is selected */}
          {selectedCategory && (
            <div className="dropdown-wrapper">
              <label className="dropdown-label">Select Subcategory:</label>
              <div className="custom-dropdown">
                <div
                  className={`dropdown-header ${
                    showSubcategoryDropdown ? "active" : ""
                  }`}
                  onClick={() =>
                    setShowSubcategoryDropdown(!showSubcategoryDropdown)
                  }
                >
                  <span>
                    {selectedSubcategory || "Choose a subcategory..."}
                  </span>
                  <span className="dropdown-arrow">
                    {showSubcategoryDropdown ? "▲" : "▼"}
                  </span>
                </div>

                {showSubcategoryDropdown && (
                  <div className="dropdown-options">
                    {subCategories.map((subcategory, index) => (
                      <div
                        key={index}
                        className={`dropdown-option ${
                          selectedSubcategory === subcategory.name
                            ? "selected"
                            : ""
                        }`}
                        onClick={() =>
                          handleSubcategorySelect(subcategory.name)
                        }
                      >
                        {subcategory.name}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Topics Display */}
        {selectedCategory && selectedSubcategory && (
          <div className="topics-section">
            <h3>
              Topics for {selectedCategory} → {selectedSubcategory}
            </h3>

            {loading ? (
              <div className="loading-spinner">
                <div className="spinner"></div>
                <span>Loading topics...</span>
              </div>
            ) : topics.length > 0 ? (
              <div className="topics-grid">
                {topics.map((topic, index) => (
                  <div key={index} className="topic-card">
                    <div className="topic-icon">📚</div>
                    <div className="topic-name">{topic.name}</div>
                    <div className="topic-files">
                      {topic.fileUrls?.length || 0} files
                    </div>

                    <div className="topic-actions">
                      <button onClick={() => handleDescriptionClick(topic)}>
                        Description
                      </button>
                      <button onClick={() => handleTopicClick(topic)}>
                        Preview File
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="no-topics-message">
                <div className="no-topics-icon">📝</div>
                <p>No topics found for this combination.</p>
                <small>
                  Try selecting a different category or subcategory.
                </small>
              </div>
            )}
          </div>
        )}

        {/* Instructions */}
        {!selectedCategory && (
          <div className="instructions">
            <h3>How to use:</h3>
            <ol>
              <li>
                Select a <strong>Category</strong> from the dropdown above
              </li>
              <li>
                Choose a <strong>Subcategory</strong> that appears next
              </li>
              <li>
                Browse the <strong>Topics</strong> that will be displayed
              </li>
              <li>Click on any topic to view the content</li>
            </ol>
          </div>
        )}
      </main>
    </div>
  );
};

export default Notes;
