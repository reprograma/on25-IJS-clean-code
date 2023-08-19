class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      if(this.items[i].quality >= 0 && this.items[i].name !== 'Sulfuras, Hand of Ragnaros' && this.items[i].quality <= 50) {
        this.items[i].sellIn--

        if (this.items[i].name !== 'Aged Brie' && this.items[i].name !== 'Backstage passes to a TAFKAL80ETC concert') {
          this.items[i].quality--
        } 

        if(this.items[i].name === 'Aged Brie') {
          this.items[i].quality++
        }
        
        if(this.items[i].name === "Backstage passes to a TAFKAL80ETC concert") {
          switch(true) {
            case this.items[i].sellIn === 0:
              this.items[i].quality = 0;
            case this.items[i].sellIn <=5:
              this.items[i].quality += 3;
            case this.items[i].sellIn <= 10:
              this.items[i].quality += 2;
            default:
              this.items[i].quality++;
          }
        }
      }
    }

    return this.items;
  }

}

module.exports = {
  Item,
  Shop
}
