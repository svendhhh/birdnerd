zealandia = ["Little spotted kiwi",
"California quail",
"Paradise shelduck",
"Mallard",
"Little shag",
"Pied shag",
"Little black shag",
"Black shag",
"New Zealand falcon",
"Pukeko",
"Southern black-backed gull",
"Red-billed gull",
"Black-billed gull",
"Rock pigeon",
"New Zealand pigeon",
"Kaka",
"Eastern rosella",
"Red-crowned parakeet",
"Shining cuckoo",
"Morepork",
"Sacred kingfisher",
"Rifleman",
"North Island saddleback",
"Stitchbird",
"Grey warbler",
"Bellbird",
"Tui",
"Whitehead",
"New Zealand fantail",
"North Island robin",
"Silvereye",
"Eurasian blackbird",
"Song thrush",
"Common starling",
"House sparrow",
"Dunnock",
"Brown teal",
"Chaffinch",
"European goldfinch"]

for (const bird of data) {
    if (zealandia.includes(bird.name)) {
        bird.category.push("Zealandia")
    }
}