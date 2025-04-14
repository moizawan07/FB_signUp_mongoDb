import { useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Admin() {
  const [productData, setProductData] = useState({
    name: "",
    title: "",
    description: "",
    imageUrl: null,
  });

  const [formErr, setFormErr] = useState({
    name: null,
    title: null,
    description: null,
    imageUrl: null,
  });
  let inputFileRef = useRef(null)
  let [serverMsg , setServerMsg] = useState(null)

  const validateForm = () => {
    let { name, title, description, imageUrl } = productData;
    let newErrors = {};

    if (!name) newErrors.name = "Name is required";
    else if (name.length < 4) newErrors.name = "Name must be at least 4 characters";

    if (!title) newErrors.title = "Title is required";
    else if (title.length < 6) newErrors.title = "Title must be at least 6 characters";

    if (!description) newErrors.description = "Description is required";
    else if (description.length < 15) newErrors.description = "Description must be at least 15 characters";

    if (!imageUrl) newErrors.imageUrl = "Image is required";

    setFormErr(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const addProduct = async () => {
    if (!validateForm()) return;

    try {
      // 1: Create FormData object
      const formData = new FormData();

      //  2: Append all fields (text + file) In this Obj
      formData.append("name", productData.name);
      formData.append("title", productData.title);
      formData.append("description", productData.description);
      formData.append("imageUrl", productData.imageUrl); //  File send ho rhi hai yahan

      // 3: Call API  Content-Type not set  browser automatically set
      let response = await fetch("http://localhost:3000/productAdd", {
        method: "POST",
        body: formData,
      });

      const res = await response.text();
         setServerMsg(res)

    //   Reset Form Here
     setProductData({
        name: "",
        title: "",
        description: "",
        imageUrl: null,
     })
     
     inputFileRef.current.value = null



    } catch (error) {
      console.log("Caught Error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <h2 className="text-4xl font-bold ml-20 mt-10 mb-7 text-gray-700">
        Add New Product
      </h2>
      <div className="max-w-[450px] ml-5 bg-white p-7 rounded-xl shadow-md mb-20 space-y-6">

        <input
          type="text"
          name="name"
          value={productData.name}
          placeholder="Product Name"
          className="w-full p-3 border border-gray-300 rounded-lg"
          onChange={(e) => setProductData({ ...productData, name: e.target.value })}
        />
        {formErr.name && <p className="errMsg">{formErr.name}</p>}

        <input
          type="text"
          name="title"
          value={productData.title}
          placeholder="Product Title"
          className="w-full p-3 border border-gray-300 rounded-lg"
          onChange={(e) => setProductData({ ...productData, title: e.target.value })}
        />
        {formErr.title && <p className="errMsg">{formErr.title}</p>}

        <textarea
          name="description"
          value={productData.description}
          rows="4"
          placeholder="Product Description"
          className="w-full p-3 border border-gray-300 rounded-lg"
          onChange={(e) => setProductData({ ...productData, description: e.target.value })}
        />
        {formErr.description && <p className="errMsg">{formErr.description}</p>}

        <input
          type="file"
          name="imageUrl"
          ref={inputFileRef}
          className="w-full p-3 border border-gray-300 rounded-lg"
          onChange={(e) => setProductData({ ...productData, imageUrl: e.target.files[0] })}
        />
        {formErr.imageUrl && <p className="errMsg">{formErr.imageUrl}</p>}

        {serverMsg && <p className={serverMsg.includes('Sucessfully') ? 'sucess' : 'errMsg'}>{serverMsg}</p>}
        <button
          onClick={addProduct}
          className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700"
        >
          Add Product
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default Admin;
