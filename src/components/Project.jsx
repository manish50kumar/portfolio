
import Todo1 from '../assets/tictactoe.PNG'
import Todo2 from '../assets/gif3.PNG'
import Todo3 from '../assets/whiteboard1.PNG'
import Todo4 from '../assets/project.jpg'
import Todo5 from '../assets/project.jpg'
const Portfolio = () => {

    const portfolios =  [
        {
            id : 1,
            src: Todo1,
            projectName:"Tic-Tac-Toe",
            link: "https://github.com/manish50kumar/Triweb_Learning/tree/master/projects/tic_tac_toe",
            liveLink : "https://tic-tac-toe-xi-murex.vercel.app/"
            
        },
        {
            id : 2,
            src: Todo2,
            projectName:"Gif-Generator",
            link: "https://github.com/manish50kumar/Gif-Generator",
            liveLink : "https://gif-generator-plum.vercel.app/"
        },
        {
            id : 3,
            src: Todo3,
            projectName:"Whiteboard",
            link:"https://github.com/manish50kumar/whiteboard",
            liveLink:"https://manish50kumar.github.io/whiteboard/"
        },
        {
            id : 4,
            src: Todo4,
            projectName: "Login and Registration system (PHP)",
            link:"https://github.com/manish50kumar/Registration_and_login_page"
        },
        {
            id : 5,
            src: Todo5,
            projectName:"Ed.Tech MERN STACK",
            link:"https://github.com/manish50kumar/EdTech_MERN_STACK_Project"
        },
    ]

  return (
      <div name="project" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
          <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
              <div className='pb-8'>
                  <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Projects</p>
                  <p className='py-6'>Check out some of my work right here</p>
              </div>

             

              <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                  
                   {
                  portfolios.map(({ id, src,link,liveLink,projectName }) => {
                     return  <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                           <img src={src} alt="projectImage" className='rounded-md duration-200 hover:scale-105'/>
                         <h1 className='font-bold text-center'>{projectName}</h1>
                         <div className='flex items-center justify-center '>
                             <a href={liveLink}
                                 target="_blank"
                                rel="noreferrer"
                                 className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</a>
                             <a href={link}
                                 target="_blank"
                                rel="noreferrer"
                                 className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'
                             >Code</a>
                             
                             
                          </div>
                       </div>
                  })
              }
                  
                 
              </div>
             
          </div>
    </div>
  )
}
export default Portfolio;