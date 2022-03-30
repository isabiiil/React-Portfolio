import * as React from "react";
import { Timeline, TimelineEvent } from "react-event-timeline";
import experiences from '../assets/experiences';
import CravingLogo from '../assets/craving.png';

export default function Experience2() {
  return (
    <Timeline 
      style={{ zoom: '180%', maxWidth: '80%' }}
      lineColor='#816e50'
      lineStyle={{ left: '17px'}}
    >
      {experiences.map(exp => {
        return (
          <TimelineEvent
            title={exp.title}
            createdAt={exp.date}
            icon={<img src={exp.logo} style={{ maxWidth: '80%' }} />}
            collapsible={true}
            key={exp.id}
            bubbleStyle={{ borderColor: '#816e50'}}
            style={{ backgroundColor: exp.id % 2 === 0 ? '#b1b9c6' : '#cca3a1' }}
          >
            {exp.details.map(det => {
              return (
                <p>{det}</p>
              )
            })}
            <p><em>{exp.company}</em></p>
          </TimelineEvent>
        )
      })}
      <TimelineEvent
        title="Founder @ Craving"
        createdAt="August 2021 - Present"
        icon={<img src={CravingLogo} style={{ maxWidth: '80%' }} />}
        collapsible={true}
      >
        ▪ Oversee and manage the development of a mobile dating app which uses React Native and Firebase
        <br />
        ▪ Create product requirements, tech spec, business plan, pitch deck, roadmap, and other documents
        <br />
        ▪ Participated in CUNY Startups accelerator program and finished ranking 4th out of 15 teams as well as Pioneer accelerator program and ranked 24th in North America
        <br /><br />
        <em>Craving is a dating app that emphasizes communication, transparency, and safety to provide a better and more well-rounded dating experience.</em>
      </TimelineEvent>
      <TimelineEvent
        title="You sent an email to John Doe"
        onClick={() => alert("clicked")}
        createdAt="2016-09-11 09:06 AM"
        icon={<i className="material-icons md-18">email</i>}
        collapsible={true}
      >
        Like we talked, you said that you would share the shipment details? This
        is an urgent order and so I am losing patience. Can you expedite the
        process and pls do share the details asap. Consider this a gentle
        reminder if you are on track already!
      </TimelineEvent>
    </Timeline>
  );
};
