let Fortune = {
    eightBall: '',
    switchFortune(){
        let randomNumber = Math.floor(Math.random()*8);
    
        switch(randomNumber) {
            case 0:
                this.eightBall = 'It is certain';
                break;
            case 1:
                this.eightBall = 'It is decidedly so';
                break;
            case 2:
                this.eightBall = 'Reply hazy try again';
                break;
            case 3:
                this.eightBall = 'Cannot predict now';
                break;
            case 4:
                this.eightBall = 'Do not count on it';
                break;
            case 5:
                this.eightBall = 'My sources say no';
                break;
            case 6:
                this.eightBall = 'Outlook not so good';
                break;
            case 7:
                this.eightBall = 'Signs point to yes';
                break;
            default:
                break;
        }
    },
    getFortune() {
        this.switchFortune();
        return this.eightBall;
    }
};

export default Fortune;