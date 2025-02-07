import { useState } from "react";

const Blog = () => {
    
    const [formData, setFormData] = useState({title:"", desc:""})
    const [blog, setBlog] = useState([])

    const BlogSubmit = (e) => {
        e.preventDefault();

        setBlog([{title: formData.title,desc: formData.desc}, ...blog]);
        setFormData({title:"", desc:""});
        console.log(blog);
    }
    return(
        <>
        <div className="container-fluid">
            <div className="row">
                
                 {/* form { blog input }*/}
                <div className="col-3 p-2 border">
                    <form onSubmit={BlogSubmit}>
                        <input className="w-100 mb-2"
                            type="text" 
                            placeholder="Title"
                            value={formData.title}
                            onChange = {(e) => setFormData({title: e.target.value, desc:formData.desc})}
                        />
                        <textarea className="w-100" 
                            placeholder="Your Content"
                            value={formData.desc}
                            onChange = {(e) => setFormData({title: formData.title, desc: e.target.value})}
                        />
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>

                 {/* output { blog card show }  */}
                <div className="col-9 p-2 border">
                    <div className="row">
                        {blog.map((value,i) => (
                            <div className="col-4 p-2" key={i}>
                                <div className="card p-2">
                                    <h3>{value.title}</h3>    
                                    <div className="">
                                        <p>{value.desc}</p>
                                    </div>                                    
                                </div>                             
                            </div>
                        ))}
                    </div>            
                </div>
            </div>
        </div>            
        </>
    )
}

export default Blog;