import socket from 'socket.io-client';
import {CollectionContextProvider} from './collection-context-manager';

export default class ConnectionManager {
    constructor (port) {
        this.port = port;
        this.socket = socket;
        this.connected = false;
    }

    init() {
        this.socket = socket.connect(`http://localhost:${this.port}`);

        this.socket.on('connect', () => {
            console.log('Connected to server');
            this.connected = true;
            socket.emit('getCollection');
        });

        socket.on('newPost', newPost => {
            if(newPost.error){
                console.log(newPost.error);
            }
            else{
               CollectionContextProvider.addItem(newPost);
            }
        });

        this.socket.on('initCollection', collection => {
            CollectionContextProvider.setCollectionData(collection);
        });
    }

    disconnect() {
        socket.disconnect();
        this.connected = false;
    }
}