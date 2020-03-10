import Link from 'next/link';
import './TimelineItem.css'

const TimelineItem = props => (
    <section className="timeline-section">

        <div className='item-title'>
            <h2>{props.itemTitle}</h2>
            <img alt={props.imgAlt} src={props.imgSrc}/>
        </div>
        <div className='item-text'>
            <div className='hider'></div>
            <p>{props.itemText}</p>
            <Link href={props.linkHref}>
                <a className="section-button">{props.linkText}</a>
            </Link>
            
        </div>

    </section>
  );
  
  export default TimelineItem;