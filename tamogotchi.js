const tamogotchi = {
    name: 'egg',
    meal: 1,
    energy: 2,
    mood: 4,
    getStatus: function() {
        let eatt;
        let energyy;
        let moodd;

        if( this.meal < 1 || this.energy < 1 || this.mood < 1){
            return `[${this.name}] умер :(`
        }
        if( this.meal === 1 && this.energy === 1 && this.mood === 1){
            return 'я устал, босс'
        } else {
        if(this.meal < 3){
            eatt = "Я голоден";
        } else {
            eatt = "Я не голоден"
        }
        if (this.energy < 3){
            energyy = "Я хочу спать"
        } else {
            energyy = "Я не хочу спать"
        }
        if (this.mood < 3){
            moodd = "Мне скучно"
        } else {
            moodd = "Мне не скучно"
        }
        return `Имя: ${this.name}, Еда: eatt (${this.meal}), Энергия: energyy (${this.energy}), Настроение: moodd (${this.mood}).`;
        }
        
    },
    setName: function(nameObj) {
        this.name = nameObj;
    },
    eat: function() {
        if(this.meal < 5){
            this.meal = this.meal + 1;
        }
        this.mood = this.mood - 1;
    },
    sleep: function() {
        if(this.energy < 5){
            this.energy = this.energy + 1;
        }
        this.meal = this.meal - 1;
    },
    play: function() {
        if(this.mood < 5){
            this.mood = this.mood + 1;
        }
        this.energy = this.energy - 1;
    }
  }