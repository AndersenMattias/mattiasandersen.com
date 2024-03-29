import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { BsBriefcaseFill } from 'react-icons/bs';
import { IoSchool } from 'react-icons/io5';
import { AiFillStar } from 'react-icons/ai';

const Experience = () => {
  return (
    <div className='experience'>
      <VerticalTimeline>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          contentStyle={{ background: 'rgb(33, 150, 243)', color: 'black' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date='2011 - present'
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<BsBriefcaseFill />}
        >
          <h3 className='vertical-timeline-element-title'>
            Frontend Developer - Consid
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>Malmo, Sweden</h4>
          <p>Frontend Developer</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          date='2010 - 2011'
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<BsBriefcaseFill />}
        >
          <h3 className='vertical-timeline-element-title'>
            EC Education | Frontend Developer
          </h3>

          <h4 className='vertical-timeline-element-subtitle'>
            Higher Vocational Education
          </h4>

          <p> Computer Science</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          date='2008 - 2010'
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<BsBriefcaseFill />}
        >
          <h3 className='vertical-timeline-element-title'>
            Internship | Frontend Developer - Tahoe Solutions
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>Malmo, Sweden</h4>
          <p>
            Developed a SharePoint Online Web Part with React, TypeScript,
            Fluent UI and D3.js.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          date='2006 - 2008'
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<BsBriefcaseFill />}
        >
          <h3 className='vertical-timeline-element-title'>Web Designer</h3>
          <h4 className='vertical-timeline-element-subtitle'>
            San Francisco, CA
          </h4>
          <p>User Experience, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='April 2013'
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<IoSchool />}
        >
          <h3 className='vertical-timeline-element-title'>
            Content Marketing for Web, Mobile and Social Media
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>Online Course</h4>
          <p>Strategy, Social Media</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='November 2012'
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<IoSchool />}
        >
          <h3 className='vertical-timeline-element-title'>
            Agile Development Scrum Master
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>Certification</h4>
          <p>Creative Direction, User Experience, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='2002 - 2006'
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<IoSchool />}
        >
          <h3 className='vertical-timeline-element-title'>
            Bachelor of Science in Interactive Digital Media Visual Imaging
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>
            Bachelor Degree
          </h4>
          <p>Creative Direction, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          icon={<AiFillStar />}
        />
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
