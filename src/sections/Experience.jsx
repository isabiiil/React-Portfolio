import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CravingLogo from '../assets/craving.png';
import RobloxLogo from '../assets/roblox.png';
import OdenLogo from '../assets/oden.png';

export default function Experience() {
  return (
    <VerticalTimeline
      layout='1-column-left'
      lineColor='black'
    >
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: '#b1b9c6', color: '#23221c' }}
        contentArrowStyle={{ borderRight: '7px solid  #b1b9c6' }}
        iconStyle={{ background: '#b1b9c6', color: '#fff' }}
        icon={<img src={CravingLogo} style={{ padding: '6px', maxWidth: '100%'}} />}
      >
        <h3 className="vertical-timeline-element-title">Founder @ Craving</h3>
        <h4 className="vertical-timeline-element-subtitle">New York, NY</h4>
        <h4>August 2021 - Present</h4>
        <p>
          ▪ Oversee and manage the development of a mobile dating app which uses React Native and Firebase
          <br />
          ▪ Create product requirements, tech spec, business plan, pitch deck, roadmap, and other documents
          <br />
          ▪ Participated in CUNY Startups accelerator program and finished ranking 4th out of 15 teams as well as Pioneer accelerator program and ranked 24th in North America
          <br /><br />
          <em>Craving is a dating app that emphasizes communication, transparency, and safety to provide a better and more well-rounded dating experience.</em>
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: '#cca3a1', color: '#23221c' }}
        contentArrowStyle={{ borderRight: '7px solid  #cca3a1' }}
        iconStyle={{ background: '#cca3a1', color: '#fff' }}
        icon={<img src={RobloxLogo} style={{ padding: '6px', maxWidth: '100%'}} />}
      >
        <h3 className="vertical-timeline-element-title">Product Management Intern @ Roblox</h3>
        <h4 className="vertical-timeline-element-subtitle">San Mateo, CA</h4>
        <h4>June 2021 - September 2021</h4>
        <p>
          ▪ Ideated key new features and wrote specification documents geared towards design and engineering teams
          <br />
          ▪ Designed product requirements and low-fidelity mockups for desktop interfaces
          <br /><br />
          <em>Roblox’s mission is to bring the world together through play. We enable anyone to imagine, create, and have fun with friends as they explore millions of immersive 3D experiences, all built by a global community of developers. Roblox is powered by a global community of over two million developers who produce their own immersive multiplayer experiences each month using Roblox Studio, our intuitive desktop design tool. Any experience imaginable can be created on Roblox. Roblox is ranked as one of the top online entertainment platforms for audiences under the age of 18 based on average monthly visits and time spent (Comscore). Our popularity is driven purely by the community with millions of people signing up through word of mouth every month.</em>
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: '#b1b9c6', color: '#23221c' }}
        contentArrowStyle={{ borderRight: '7px solid  #b1b9c6' }}
        iconStyle={{ background: '#b1b9c6', color: '#fff' }}
        icon={<img src={OdenLogo} style={{ padding: '6px', maxWidth: '100%'}} />}
      >
        <h3 className="vertical-timeline-element-title">Software Engineering Intern @ Oden Technologies</h3>
        <h4 className="vertical-timeline-element-subtitle">New York, NY</h4>
        <h4>February 2021 - May 2021</h4>
        <p>
          ▪ Improved user experience and addressed users' feature request by implementing drag-and-drop reordering of results filters using React Typescript
          <br />
          ▪ Created dynamic data visualization options for metrics taken from industrial IoT sensors using Go and GraphQL
          <br />
          ▪ Prototyped a cross-platform mobile application that delivers alerts and notifications using React Native
          <br /><br />
          <em>Oden Technologies is the intelligent industrial automation company, empowering manufacturers to embrace Industry 4.0 and achieve perfect production. Oden provides complete visibility into all the production processes in real-time. It wirelessly collects data from any machine, integrates it with third-party systems and delivers instantaneous insights leading to effective quality control, timely maintenance and lower machine downtimes, optimized operations, and higher customer satisfaction.
          <br />
          Oden’s mission is to help any manufacturer - large or small -  reach ‘perfect production’. Make products better, faster, with less waste and impact on the environment.</em>
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  )
}