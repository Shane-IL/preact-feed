const path = require("path");
const app = require("express")();
var http = require('http').Server(app);
var io = require('socket.io')(http);

const port = process.env.PORT || "8000";

const _collection = [
    {id: 1, firstName: "Bob", lastName: "Smith", avatar: "http://media-elerium.cursecdn.com/avatars/thumbnails/37/990/55/55/635959738381142622.jpeg"},
    {id: 2, firstName: "Johnny", lastName: "MacFly", avatar: "http://media-hearth.cursecdn.com/avatars/thumbnails/256/504/55/55/635762192493373586.png"},
    {id: 3, firstName: "Bill", lastName: "MacFly", avatar: "http://media-curse.cursecdn.com/avatars/thumbnails/149/64/55/55/635839250935672518.jpg"},
    {id: 4, firstName: "Jim", lastName: "Jones", avatar: "http://media-diablofans.cursecdn.com/avatars/thumbnails/200/76/55/55/635884250354639819.jpeg"},
    {id: 5, firstName: "Tim", lastName: "MacFly", avatar: "http://media-elerium.cursecdn.com/avatars/thumbnails/10/494/55/55/635457676097658445.jpeg"}
];

const _avatarPool = [
    "http://media-elerium.cursecdn.com/avatars/thumbnails/37/990/55/55/635959738381142622.jpeg",
    "http://media-hearth.cursecdn.com/avatars/thumbnails/256/504/55/55/635762192493373586.png",
    "http://media-curse.cursecdn.com/avatars/thumbnails/149/64/55/55/635839250935672518.jpg",
    "http://media-diablofans.cursecdn.com/avatars/thumbnails/200/76/55/55/635884250354639819.jpeg",
    "http://media-curse.cursecdn.com/avatars/thumbnails/70/474/55/55/635122246198927542.png",
    "http://media-hearth.cursecdn.com/avatars/thumbnails/156/847/55/55/635550214790288633.png",
    "http://media-elerium.cursecdn.com/avatars/thumbnails/10/494/55/55/635457676097658445.jpeg"
];

const _namePool = {
    names:[
        "Bob","Jim","Ned","Bill","Tim","Joe","Johnny","Simon"
    ],
    surnames: [
        "Smith", "Johnson", "Murray", "MacFly", "Goldberg", "Jones", "Potter"
    ]
};

const postGenerator = setInterval(() => generatePost(socket, postGenerator), 30000);

io.on('connection', socket => {
    console.log('client app connected');
    socket.on('generatePost', () => generatePost(socket, _totalCount, postGenerator));
    socket.on('getCollection', () => socket.emit('initCollection', _collection));
});


app.get("/", (req, res) => {
  res.status(200).send("Ping");
});

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});

function generatePost(socket, postGenerator) {
    if(_collection < 5000){
        const newPost = {
            id: _collection.length,
            avatar: _avatarPool[Math.floor(Math.random() * _avatarPool.length)],
            firstName: _namePool.names[Math.floor(Math.random() * _namePool.names.length)],
            lastName: _namePool.surnames[Math.floor(Math.random() * _namePool.surnames.length)]
        };
        _collection.push(newPost);
        socket.emit('newPost', newPost);
        console.log('post added');
    }
    else{
        clearInterval(postGenerator);
        console.log("Server full, generator stopped.");
        socket.emit('newPost', {error: "server capacity reached"});
    }
}
