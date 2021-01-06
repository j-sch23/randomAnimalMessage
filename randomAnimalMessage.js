const animalData = {
    _planetList : [
        "Mennecarro",
        "Lolmocarro",
        "Suthore",
        "Gebuna",
        "Aiter",
        "Cinus",
        "Gnabeturn",
        "Sigicury",
        "Minda R9",
        "Byke IZ79",
        "Mutholea",
        "Thugnutov",
        "Gacrides",
        "Chicrade",
        "Riephus",
        "Kigawa",
        "Sototera",
        "Mulobos",
        "Drarvis 86",
        "Gnillon 56O1",
        "Podruvis",
        "Choccelea",
        "Ochara",
        "Chinnosie",
        "Zaibos",
        "Cizuno",
        "Stroaruta",
        "Gaurus",
        "Llerth 0NP3",
        "Noth 8L8"
      ],
    _animalList : [
        "Lightyear",
        "Bose",
        "Hertz",
        "Seti",
        "Phase",
        "Galax",
        "Chiusyurs",
        "Vuron",
        "Fouke",
        "Ceosnirx",
        "Einstein",
        "Pixel",
        "Grav",
        "Ogre",
        "Flare",
        "Malif",
        "Cuxish",
        "Larstruu",
        "Bubliart",
        "Butid",
        "Hydra",
        "Eye",
        "Nasa",
        "Solstice",
        "Shadow",
        "Astralle",
        "Uctedo",
        "Bokeirzo",
        "Oryoeszo",
        "Yooda",
        "Shadow",
        "Gibbsy",
        "Astralle",
        "Chromy",
        "Flare",
        "Sputs",
        "Shounyek",
        "Neczensua",
        "Nacna",
        "Uulkote"
      ],
    _exteriorColor : [
        "red",
        "yellow",
        "orange",
        "green",
        "blue",
        "purple",
        "brown",
        "black",
        "rainbow"
    ],
    _exteriorType : [
        "fur",
        "scales",
        "feathers",
        "skin"
    ],
    _attributeDescriptor : [
        "long",
        "short",
        "wide",
        "small",
        "big",
        "powerful",
        "weak",
        "strong"
      ],
    _attribute : [
        "talons",
        "fangs",
        "wings",
        "legs",
        "ears",
        "horns",
        "spikes"
      ],
    _quality : [
        "eyesight",
        "hearing",
        "sense of smell",
        "camouflaging ability",
        "hunting capabilities",
        "endurance"
      ],
    _qualityDescriptor : [
        "great",
        "poor",
        "amazing",
        "incredible",
        "very poor",
        "good",
        "bad",
        "very good",
        "decent",
        "terrible"
      ],
    _definingDescriptor : [
        "best",
        "worst",
        "strongest",
        "most powerful",
        "absolute best",
        "absolute worst",
        "least powerful"
      ],
    randomIndex(arr) {
        return Math.floor(Math.random() * arr.length);
    },
    randomWeight() {
        return Math.floor(Math.random() * 100);
    },
    get planet() {
        return this._planetList[this.randomIndex(this._planetList)];
    },
    get animal() {
        return this._animalList[this.randomIndex(this._animalList)];
    },
    get color() {
        return this._exteriorColor[this.randomIndex(this._exteriorColor)];
    },
    get exterior(){ 
        return this._exteriorType[this.randomIndex(this._exteriorType)];
    },
    get attribDesc() {
        return this._attributeDescriptor[this.randomIndex(this._attributeDescriptor)];
    },
    get attrib() {
        return this._attribute[this.randomIndex(this._attribute)];
    },
    get quality() {
        return this._quality[this.randomIndex(this._quality)]; 
    },
    get qualityDesc() {
        return this._qualityDescriptor[this.randomIndex(this._qualityDescriptor)];
    },
    get defDesc() {
        return this._definingDescriptor[this.randomIndex(this._definingDescriptor)];
    }
    };
const animalAssembler = () => {
    let index = Math.floor(Math.random() * 4)
    switch (index) {
        case 0:
            return `${animalData.animal} are found on the planet ${animalData.planet} and typically weigh between ${animalData.randomWeight()} and ${animalData.randomWeight()} pounds.\nThey have ${animalData.color} ${animalData.exterior}, ${animalData.attribDesc} ${animalData.attrib}, and ${animalData.attribDesc} ${animalData.attrib}. \nThey are known for having ${animalData.qualityDesc} ${animalData.quality}.`;
            break;
        case 1:
            return `Did you know that ${animalData.animal} have the ${animalData.defDesc} ${animalData.quality} of any animal on planet ${animalData.planet}? Thats so cool!`;
            break; 
        case 2:
            return `Random alien animal fact of the day: ${animalData.animal}’s have the ${animalData.defDesc} ${animalData.quality} of any creature on planet ${animalData.planet}!`;
            break;
        case 3:
            return `Not many people know this…but ${animalData.animal}’s have ${animalData.color} ${animalData.exterior}. They’re from planet ${animalData.planet} and they’re super cool! You are now among the few who know this.  You should feel special :)`;
            break;
        case 4:
            return `If there is one thing you should know its that ${animalData.animal}’s have ${animalData.attribDesc} ${animalData.attrib}. Why you should know this is for you to figure out!`;
            break;    
    };
}
console.log(animalAssembler());
