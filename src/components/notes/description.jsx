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
import {
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import "../../assets/css/notes.css";

const Notes = () => {
  const { selectedClass, category, subcategory } = useParams();
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [topics, setTopics] = useState({});
  const [loading, setLoading] = useState(false);

  const [opencategoryId, setOpencategoryId] = useState(null);
  const [activeContentType, setActiveContentType] = useState(subcategory);

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Sync category/subcategory from URL
  useEffect(() => {
    if (category && categories.length > 0) {
      const categoryIndex = categories.findIndex(
        (c) => c.toLowerCase() === category.toLowerCase()
      );
      setOpencategoryId(categoryIndex >= 0 ? categoryIndex : null);
    }

    if (subcategory && category) {
      setActiveContentType(subcategory);
      fetchTopics(category, subcategory);
    }
  }, [category, subcategory, selectedClass, categories]);

  // Fetch categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const snapshot = await getDocs(collection(fireStore, "categories"));
        const catList = snapshot.docs.map((doc) => doc.data().name);
        setCategories(catList);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  // Fetch subcategories (no filter)
  useEffect(() => {
    const fetchSubCategories = async () => {
      try {
        const snapshot = await getDocs(collection(fireStore, "subcategories"));
        const allSubCategories = snapshot.docs.map((doc) => doc.data());
        console.log("All Subcategories:", allSubCategories);
        setSubCategories(allSubCategories);
      } catch (error) {
        console.error("Error fetching subcategories:", error);
      }
    };

    fetchSubCategories();
  }, []);

  // Fetch topics
  const fetchTopics = async (cat, type) => {
    setLoading(true);
    try {
      const q = query(
        collection(fireStore, "topics"),
        where("class", "==", selectedClass),
        where("category", "==", cat.trim().toLowerCase()),
        where("contentType", "==", type.trim().toLowerCase())
      );

      const snapshot = await getDocs(q);
      const topicData = {};
      snapshot.forEach((doc) => {
        const data = doc.data();
        if (data.topic) topicData[data.topic] = data.fileUrls || [];
      });

      setTopics(topicData);
    } catch (error) {
      console.error("Error fetching topics:", error);
    }
    setLoading(false);
  };

  // Handle category click
  const handlecategoryClick = (categoryName, index) => {
    const newOpenId = opencategoryId === index ? null : index;
    setOpencategoryId(newOpenId);

    if (newOpenId !== null) {
      navigate(`/notes/${selectedClass}/${categoryName.toLowerCase()}`);
    } else {
      navigate(`/notes/${selectedClass}`);
    }

    if (opencategoryId !== index) {
      setActiveContentType(null);
      setTopics({});
    }
  };

  // Handle subcategory (content type) click
  const handleContentTypeClick = (categoryName, type) => {
    setActiveContentType(type);
    navigate(`/notes/${selectedClass}/${categoryName.toLowerCase()}/${type}`);
    fetchTopics(categoryName, type);
  };

  // Handle topic click to preview file
  const handleTopicClick = (topicName) => {
    const fileData = topics[topicName]?.[0];
    let fileUrl = "";

    if (typeof fileData === "string") {
      fileUrl = fileData;
    } else if (fileData && typeof fileData === "object") {
      fileUrl = fileData.url || fileData.fileUrl || "";
    }

    if (fileUrl && typeof fileUrl === "string") {
      navigate(`/preview?url=${encodeURIComponent(fileUrl)}`);
    } else {
      console.warn("No valid file URL found for topic:", topicName);
    }
  };

  return (
    <div className="notes-container">
      <main>
        <h2>Welcome to Our Educational Portal</h2>
        <p className="intro-text text-center py-3 fw-bold">
          Our goal is to provide high-quality educational resources.
        </p>

        <div className="categorys-grid">
          {categories.map((categoryName, index) => (
            <div
              key={index}
              className={`category-card ${
                opencategoryId === index ? "active" : ""
              }`}
            >
              <div
                className="category-header"
                onClick={() => handlecategoryClick(categoryName, index)}
              >
                <span>{categoryName}</span>
                <span>{opencategoryId === index ? "▼" : "►"}</span>
              </div>

              <div
                className={`dropdown-container ${
                  opencategoryId === index ? "visible" : ""
                }`}
              >
                <div className="dropdown-content">
                  {subCategories.length > 0 ? (
                    subCategories.map((sub, i) => (
                      <div key={i}>
                        <div
                          className={`content-type ${
                            activeContentType === sub.name ? "active" : ""
                          }`}
                          onClick={() =>
                            handleContentTypeClick(categoryName, sub.name)
                          }
                        >
                          {sub.name}
                        </div>

                        {activeContentType === sub.name && (
                          <div className="topics-list">
                            {loading ? (
                              <div className="loading">Loading...</div>
                            ) : Object.keys(topics).length > 0 ? (
                              Object.keys(topics).map((topicName, i) => (
                                <div
                                  key={i}
                                  className="topic-item"
                                  onClick={() => handleTopicClick(topicName)}
                                >
                                  📌 {topicName}
                                </div>
                              ))
                            ) : (
                              <div className="no-topics">No topics available</div>
                            )}
                          </div>
                        )}
                      </div>
                    ))
                  ) : (
                    <div className="no-subcategories">No subcategories found.</div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Notes;
