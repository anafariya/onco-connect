import React from 'react'
const digitalPosts=[
    {title:"Why all insurers and employers should provide access to cancer second opinion",
        author:"Ana Fariya",
        authorImage:"/ana2.jpg",
        date:"27th March 2024",
        image:"https://images.unsplash.com/photo-1584515933487-779824d29309?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9zcHRpYWwlMjBjYXJlfGVufDB8fDB8fHww",
        categories:"Nutrition"},
        {title:"NanoKnife: A Cutting-Edge Treatment for Prostate and Pancreatic Cancer",
        author:"Ana Fariya",
        authorImage:"/ana2.jpg",
        date:"27th March 2024",
        image:"https://plus.unsplash.com/premium_photo-1667680774655-903aa950e739?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FyZXxlbnwwfHwwfHx8MA%3D%3D",
        categories:"Wellness"},
        {title:"What approach would be the best to drive ROI for employee benefit program in cancer care",
        author:"Ana Fariya",
        authorImage:"/ana1.jpg",
        date:"27th March 2024",
        image:"https://images.unsplash.com/photo-1551076805-e1869033e561?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG9zcGl0YWx8ZW58MHx8MHx8fDA%3D",
        categories:"Employee Engagement"},
        {title:"Discovering Cancer Engagement for Your Insurtech Ecosystem",
        author:"Ana Fariya",
        authorImage:"/ana1.jpg",
        date:"27th March 2024",
        image:"https://plus.unsplash.com/premium_photo-1661775434014-9c0e8d71de03?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b2ZmaWNlfGVufDB8fDB8fHww",
        categories:"Awareness"},
        {title:"Importance of cancer screening in workplace and how employers make an positive impact",
        author:"Ana Fariya",
        authorImage:"/ana1.jpg",
        date:"27th March 2024",
        image:"https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D",
        categories:"Treatment"},
        {title:"What is the actual cost of cancer for any organisation?",
        author:"Ana Fariya",
        authorImage:"/ana2.jpg",
        date:"27th March 2024",
        image:"https://images.unsplash.com/photo-1664575599730-0814817939de?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sbGVhZ3Vlc3xlbnwwfHwwfHx8MA%3D%3D",
        categories:"Screening"},

]

function Posts({ selectedCategory }) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {digitalPosts.filter(post => selectedCategory === 'ALL' || post.categories === selectedCategory).map((post, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden transition-shadow hover:shadow-lg">
              <img src={post.image} alt="" className="w-full h-60 object-cover" />
              <div className="p-6">
                <div className="flex justify-between items-center">
                  <button className="text-orange-400 bg-orange-100 rounded-full w-40 h-10 text-sm font-semibold uppercase"><span>{post.categories}</span></button>
                  <span className="text-gray-500 text-sm">{post.date}</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold tracking-tighter text-gray-900">{post.title}</h3>
                <div className="mt-4 flex items-center">
                  <img className="h-10 w-10 object-cover rounded-full mr-3" src={post.authorImage} alt={post.author} />
                  <div>
                    <p className="text-md font-medium text-gray-700">{post.author}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
export default Posts