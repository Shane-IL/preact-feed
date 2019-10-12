import {h} from 'preact';
import {useContext, useEffect} from 'preact/hooks';

import CollectionContext from '../../managers/collection-context-manager';
import ConnectionManager from '../../managers/connection-manager';

import FeedItem from '../feed-item';

const Feed = props => {
    const collection = useContext(CollectionContext);
    const connectionManager = new ConnectionManager();

    function renderFeed() { 
        
        return collection.map((collectionItem, i) => 
            <FeedItem key={i} {...collectionItem}  />    
        );
     }


    useEffect(()=> {
        connectionManager.init();
        return () => connectionManager.disconnect();
    }, []);

    return (
        <div class='feed-view main-view'>
            <h2>Feed</h2>
            <renderFeed/>
        </div>
    )
}