class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items = []) {
    this.items = items;
  }

  updateQuality() {
    for (const item of this.items) {
      this.updateItemQuality(item);
      this.updateItemSellIn(item);
    }

    return this.items;
  }

  updateItemQuality(item) {
    if (item.name === 'Aged Brie') {
      this.increaseQuality(item);
    } else if (item.name === 'Backstage passes to a TAFKAL80ETC concert') {
      this.updateBackstagePassQuality(item);
    } else if (item.name !== 'Sulfuras, Hand of Ragnaros') {
      this.decreaseQuality(item);
    }

    if (item.quality < 0) {
      item.quality = 0;
    } else if (item.quality > 50) {
      item.quality = 50;
    }
  }

  increaseQuality(item) {
    if (item.quality < 50) {
      item.quality++;
    }
  }

  decreaseQuality(item) {
    if (item.quality > 0) {
      item.quality--;
    }
  }

  updateBackstagePassQuality(item) {
    if (item.sellIn > 10) {
      this.increaseQuality(item);
    } else if (item.sellIn <= 10 && item.sellIn > 5) {
      this.increaseQuality(item, 2);
    } else if (item.sellIn <= 5) {
      this.increaseQuality(item, 3);
    }

    if (item.sellIn <= 0) {
      item.quality = 0;
    }
  }

  updateItemSellIn(item) {
    if (item.name !== 'Sulfuras, Hand of Ragnaros') {
      item.sellIn--;
    }
  }
}

module.exports = {
  Item,
  Shop,
};
