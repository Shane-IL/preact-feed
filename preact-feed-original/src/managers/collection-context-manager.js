import {createContext, useContext, useState} from 'preact';

const CollectionContext = createContext();

export const CollectionContextProvider = props => {
    const [_collection, setCollection] = useState([]);
    this.setCollectionData = collectionData => setCollection(collectionData);
    this.addItem = collectionItem => setCollection(_collection.push(collectionItem));
    return (
        <CollectionContext.Provider value={_collection}></CollectionContext.Provider>
    )
};

export const withCollectionContext = WrappedComponent => props => (
    <CollectionContext.Consumer render={ctx => <WrappedComponent {...ctx} {...props}/> } />
)

export default CollectionContext;