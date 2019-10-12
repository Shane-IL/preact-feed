import {h} from 'preact';

const WaitView = props => (
    <div class='wait-view main-view'>
        <div class='wait-view-text'>{props.text}</div>
    </div>
)

export default WaitView;