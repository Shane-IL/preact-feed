import {h} from 'preact';

const FeedItem = props => (
    <div class='feed-item'>
        <img src={props.avatar} class='feed-item-image'/>
        <div class='feed-item-details'>
            <div class='feed-item-name'>{props.firstName} {props.lastName}</div>
        </div>
    </div>
)

export default FeedItem;