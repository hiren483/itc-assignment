import React from 'react'
import './components.css'
import './events.css'

const events = () => {
  return (
    <div id='event_container'>
      <h1>all events</h1>

      <div id='event_list_container'>
        
        <div className='event_list_parent'>
          <div className='event_list'>
            <h2 className='event_list_title'>IndustryX</h2>
            <p className='event_discription'>IndustryX was a 3-day online flagship event organized by the Institute Technical Council of IIT Bombay. The primary goal was to introduce students to disruptive and emerging technologies that are shaping industries worldwide. Held during a crucial time when students were seeking exposure beyond classrooms, the event covered exciting domains like Swarm Robotics, Blockchain & Cryptocurrencies, and Space Technology — each hosted by industry leaders and researchers.
            Over 370+ students from across departments participated enthusiastically. The sessions were designed not just as one-way talks but interactive, encouraging students to ask questions, understand real-world applications, and network with professionals. It also gave students early insight into the skills and trends driving future job roles and innovations.</p>
            <h3 className='cool_text'>IndustryX: A Glimpse into the Future of Tech</h3>
            <p className='event_discription'>More than just lectures, IndustryX was an experience. It was a tech reality check for students—bringing them face-to-face with people actually building and innovating in fields like swarm engineering and decentralized systems.
Students got to see how blockchain isn’t just about Bitcoin, how robotic swarms can help in disaster zones, and how private space startups are changing the space race. It sparked side conversations, follow-up readings, and even project ideas.
With 370+ participants staying engaged through all three days, it became one of the most talked-about virtual events ITC has ever hosted — not because it was flashy, but because it genuinely made people curious about what comes next</p>
          </div>
          <div className='img_container'><img src="/industryx.png" alt="IndustryX" className='event_img'/></div>
        </div>

        <div className='event_list_parent'>
          <div className='event_list'>
            <h2 className='event_list_title'>GatherTown Convocation</h2>
            <p className='event_discription'>As part of IIT Bombay’s 59th Convocation held on August 7, 2021, the Institute Technical Council launched a unique initiative to help recreate the nostalgia of campus life — a full virtual replica of IITB built on GatherTown. Guided by Prof. Parag Chaudhuri and Prof. P Sunthar, the platform allowed graduates to walk through pixelated versions of familiar spots like Gymkhana, Badminton Courts, Cricket Nets, Gulmohar, and even iconic hostel corridors.
            This wasn’t just a viewing experience — it was interactive. Students could control avatars, meet and chat with friends, attend convocation talks, and even play a chaotic dungeon game that turned out to be a surprise hit. For many, it was a rare moment of connection during the pandemic, offering a chance to say goodbye to IITB in a way that felt personal, even from behind a screen. Juniors also got to sneak a peek into what real IIT Bombay life looks like.</p>
            <h3 className='cool_text'>GatherTown Convocation: IITB in Pixels and Memories</h3>
            <p className='event_discription'>This was not just another online farewell — it was a carefully crafted virtual experience that brought the IIT Bombay campus to life in pixels. From iconic spots like the RC bench and badminton courts to hostel corridors and gathering spaces, every detail was recreated with care. Graduating students explored the map as avatars, reconnecting with friends and leaving heartfelt messages across familiar locations.The interactive dungeon game added a lively twist, sparking laughter and spontaneous moments of chaos. For the graduating batch, it was a meaningful send-off filled with nostalgia. For juniors, it offered a glimpse into the vibrant campus life that awaits them.For a few hours, the spirit of IIT Bombay felt present again — even through a screen.</p>
          </div>
          <div className='img_container'><img src="/GatherTown.png" alt="GatherTown" className='event_img'/></div>
        </div>

        <div className='event_list_parent'>
          <div className='event_list'>
            <h2 className='event_list_title'>Technovation</h2>
            <p className='event_discription'>Technovation was a flagship competition aimed at nurturing innovation across multiple technology domains. Designed to simulate real-world challenges, the event encouraged interdisciplinary collaboration and critical thinking. Participants formed teams to identify pressing problems, design impactful solutions, and build working prototypes under tight deadlines. The final step? Pitching their ideas to an expert jury, replicating the high-pressure dynamics of professional tech presentations and startup pitches.</p>
            <h3 className='cool_text'>Technovation: Solving Problems that Matter</h3>
            <p className='event_discription'>Technovation wasn’t just another coding contest — it was where ideas met execution. With a format that blended the intensity of a hackathon with the business sharpness of a startup pitch, teams were challenged to take real-world problems head-on. From ideation to prototyping and final presentations, participants were tested on their creativity, collaboration, and technical skills. The event provided a platform for aspiring innovators to showcase their ability to think beyond textbooks and create solutions that truly matter.</p>
          </div>
          <div className='img_container'><img src="/Technovation.png" alt="Technovation" className='event_img'/></div>
        </div>

        <div className='event_list_parent'>
          <div className='event_list'>
            <h2 className='event_list_title'>Inter-IIT Tech Meet</h2>
            <p className='event_discription'>IIT Bombay took part in the Inter-IIT Tech Meet, a premier annual technology competition that brings together the brightest minds from across all IITs. The event featured a wide range of problem statements spanning core engineering, software, artificial intelligence, robotics, and more. Multiple teams from IIT Bombay worked intensively to research, design, and deliver solutions under tight deadlines. The competition served as a platform to showcase technical prowess, innovative thinking, and collaborative spirit on a national stage.</p>
            <h3 className='cool_text'>Inter-IIT Tech Meet: IITB’s Brainpower on Display</h3>
            <p className='event_discription'>At the Inter-IIT Tech Meet, IIT Bombay’s tech teams rose to the challenge, facing off against equally talented peers from institutes across the country. Whether it was crafting robust AI models, developing advanced hardware systems, or solving complex real-world problems, every task demanded sharp thinking and flawless execution. The event wasn’t just about winning — it was about pushing limits, learning from others, and representing IITB with pride. Moments like these highlighted the true strength of our student community.</p>
          </div>
          <div className='img_container'><img src="/interiit.png" alt="Inter-IIT Tech Meet" className='event_img'/></div>
        </div>

      </div>
    </div>
  )
}

export default events
