import { Injectable } from '@angular/core';
import { IOnePicture } from './one-picture/onePicture';

@Injectable({
  providedIn: 'root'
})
export class PictureServiceService {
  private pictures: IOnePicture[] = [];
  private vanGogPictures: IOnePicture[] = [];
  private daVinciPictures: IOnePicture[] = [];
  private mikhelangeloPictures: IOnePicture[] = [];
  private munchPictures: IOnePicture[] = [];
  private vermeerPictures: IOnePicture[] = [];
  public selectedPicture: IOnePicture | undefined;
  public authorPictures: IOnePicture[] = []
    
  constructor() {
    this.pictures = [{
          name: "Звездная ночь",
          year: '1889',
          author: "Винсент Ван Гог",
          location: "Музей современного искусства, Нью-Йорк, США",
          size: "73.7 см × 92.1 см",
          link: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/800px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg"
      },
      {
          name: "Мона Лиза",
          year: '1503',
          author: "Леонардо да Винчи",
          location: "Лувр, Париж, Франция",
          size: "77 см × 53 см",
          link: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/250px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg"
      },
      {
          name: "Сотворение Адама",
          year: '1512',
          author: "Микеланджело",
          location: "Сикстинская капелла, Ватикан",
          size: "280 см × 570 см",
          link: "https://upload.wikimedia.org/wikipedia/commons/7/73/God2-Sistine_Chapel.png"
      },
      {
          name: "Крик",
          year: '1893',
          author: "Эдвард Мунк",
          location: "Национальная галерея, Осло, Норвегия",
          size: "91 см × 73.5 см",
          link: "https://upload.wikimedia.org/wikipedia/commons/f/f4/The_Scream.jpg"
      },
      {
          name: "Девушка с жемчужной серёжкой",
          year: '1665',
          author: "Ян Вермеер",
          location: "Маурицхёйс, Гаага, Нидерланды",
          size: "44.5 см × 39 см",
          link: "https://upload.wikimedia.org/wikipedia/commons/7/77/%D0%94%D0%B5%D0%B2%D1%83%D1%88%D0%BA%D0%B0_%D1%81_%D0%B6%D0%B5%D0%BC%D1%87%D1%83%D0%B6%D0%BD%D0%BE%D0%B9_%D1%81%D0%B5%D1%80%D1%91%D0%B6%D0%BA%D0%BE%D0%B9.jpg"
      }
    ];

    this.vanGogPictures = [
      {
          name: "Подсолнухи",
          year: '1888',
          author: "Винсент Ван Гог",
          location: "Национальная галерея, Лондон, Великобритания",
          size: "92.1 см × 73 см",
          link: "https://pics.livejournal.com/marinagra/pic/000k0qzr/s640x480"
      },
      {
          name: "Звездная ночь над Роной",
          year: '1888',
          author: "Винсент Ван Гог",
          location: "Музей д'Орсе, Париж, Франция",
          size: "72.5 см × 92 см",
          link: "https://muzei-mira.com/templates/museum/images/paint/zvezdnaia-noch-nad-ronoi-van-gog.jpg"
      },
      {
          name: "Ирисы",
          year: '1889',
          author: "Винсент Ван Гог",
          location: "Музей Гетти, Лос-Анджелес, США",
          size: "71 см × 93 см",
          link: "https://upload.wikimedia.org/wikipedia/commons/9/98/VanGoghIrises2.jpg"
      },
      {
          name: "Ночная терраса кафе",
          year: '1888',
          author: "Винсент Ван Гог",
          location: "Креллер-Мюллер музей, Оттерло, Нидерланды",
          size: "80.7 см × 65.3 см",
          link: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Gogh4.jpg/350px-Gogh4.jpg"
      }
    ];
    this.daVinciPictures = [
      {
          name: "Тайная вечеря",
          year: '1498',
          author: "Леонардо да Винчи",
          location: "Монастырь Санта-Мария-делле-Грацие, Милан, Италия",
          size: "460 см × 880 см",
          link: "data:image/jpeg;base64,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"
      },
      {
          name: "Дама с горностаем",
          year: '1489',
          author: "Леонардо да Винчи",
          location: "Музей Чарторыйских, Краков, Польша",
          size: "54 см × 39 см",
          link: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Lady_with_an_Ermine_-_Leonardo_da_Vinci_-_Google_Art_Project.jpg/1200px-Lady_with_an_Ermine_-_Leonardo_da_Vinci_-_Google_Art_Project.jpg"
      },
      {
          name: "Витрувианский человек",
          year: '1490',
          author: "Леонардо да Винчи",
          location: "Галерея Академии, Венеция, Италия",
          size: "34.4 см × 25.5 см",
          link: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Da_Vinci_Vitruve_Luc_Viatour.jpg/250px-Da_Vinci_Vitruve_Luc_Viatour.jpg"
      },
      {
          name: "Благовещение",
          year: '1472',
          author: "Леонардо да Винчи",
          location: "Уффици, Флоренция, Италия",
          size: "98 см × 217 см",
          link: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Annunciation_%28Leonardo%29_%28cropped%29.jpg"
      }
    ];
    this.mikhelangeloPictures = [
      {
          name: "Страшный суд",
          year: '1536-1541',
          author: "Микеланджело",
          location: "Сикстинская капелла, Ватикан",
          size: "1370 см × 1200 см",
          link: "https://cdn.gallerix.asia/sr/M/1161425349/1533573099.jpg"
      },
      {
          name: "Суд над Голиафом",
          year: '1509',
          author: "Микеланджело",
          location: "Сикстинская капелла, Ватикан",
          size: "570 см × 680 см",
          link: "https://avatars.dzeninfra.ru/get-zen_doc/198938/pub_5b8e18e75102dd00aaed8618_5b8e1bfe4ed03b00aa5baeed/scale_1200"
      },
      {
          name: "Изгнание из Рая",
          year: '1510',
          author: "Микеланджело",
          location: "Сикстинская капелла, Ватикан",
          size: "350 см × 570 см",
          link: "https://i.pinimg.com/736x/f3/c7/91/f3c791471d7be4cc185fa3928337d6d2.jpg"
      },
      {
          name: "Сотворение Евы",
          year: '1511',
          author: "Микеланджело",
          location: "Сикстинская капелла, Ватикан",
          size: "170 см × 260 см",
          link: "https://print4you.com.ua/upload/iblock/f1c/f1ca6e5df5f5773dc286eb11bbfe5508.jpg"
      }
    ];
    this.munchPictures = [
      {
          name: "Больной ребёнок",
          year: '1885-1886',
          author: "Эдвард Мунк",
          location: "Национальная галерея, Осло, Норвегия",
          size: "119.5 см × 118.5 см",
          link: "https://uploads2.wikiart.org/images/edvard-munch/the-sick-child-1886.jpg"
      },
      {
          name: "Вампир",
          year: '1895',
          author: "Эдвард Мунк",
          location: "Музей Мунка, Осло, Норвегия",
          size: "91 см × 72 см",
          link: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Edvard_Munch_-_Vampire_%281895%29_-_Google_Art_Project.jpg/1200px-Edvard_Munch_-_Vampire_%281895%29_-_Google_Art_Project.jpg"
      },
      {
          name: "Мадонна",
          year: '1894-1895',
          author: "Эдвард Мунк",
          location: "Музей Мунка, Осло, Норвегия",
          size: "90 см × 68 см",
          link: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Edvard_Munch_-_Madonna_%281894-1895%29.jpg"
      },
      {
          name: "Танец жизни",
          year: '1899-1900',
          author: "Эдвард Мунк",
          location: "Национальная галерея, Осло, Норвегия",
          size: "126 см × 190 см",
          link: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Edvard_Munch_-_The_dance_of_life_%281899-1900%29.jpg"
      }
    ];
    this.vermeerPictures = [
      {
          name: "Женщина с весами",
          year: '1662-1663',
          author: "Ян Вермеер",
          location: "Национальная галерея искусств, Вашингтон, США",
          size: "42.5 см × 38 см",
          link: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Johannes_Vermeer_-_Woman_Holding_a_Balance_-_Google_Art_Project.jpg/1200px-Johannes_Vermeer_-_Woman_Holding_a_Balance_-_Google_Art_Project.jpg"
      },
      {
          name: "Молочница",
          year: '1658',
          author: "Ян Вермеер",
          location: "Рейксмюсеум, Амстердам, Нидерланды",
          size: "45.5 см × 41 см",
          link: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Johannes_Vermeer_-_De_melkmeid.jpg"
      },
      {
          name: "Вид Дельфта",
          year: '1660-1661',
          author: "Ян Вермеер",
          location: "Маурицхёйс, Гаага, Нидерланды",
          size: "96.5 см × 115.7 см",
          link: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Vermeer-view-of-delft.jpg"
      },
      {
          name: "Урок музыки",
          year: '1662-1665',
          author: "Ян Вермеер",
          location: "Королевская коллекция, Лондон, Великобритания",
          size: "74.6 см × 64.1 см",
          link: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Johannes_Vermeer_-_Lady_at_the_Virginal_with_a_Gentleman%2C_%27The_Music_Lesson%27_-_Google_Art_Project.jpg"
      }
    ];
  }
  public getData(): IOnePicture[]{
    return this.pictures;
  }
  public getVanGogPictures(): IOnePicture[]{
    return this.vanGogPictures;
  }
  public getMikhelangeloPictures(): IOnePicture[]{
    return this.mikhelangeloPictures;
  }
  public getDaVinciPictures(): IOnePicture[]{
    return this.daVinciPictures;
  }
  public getMunchPictures(): IOnePicture[]{
    return this.munchPictures;
  }
  public getVermeerPictures(): IOnePicture[]{
    return this.vermeerPictures;
  }
  public getAuthorPicture(author: string): IOnePicture[]{
    console.log(author);
    
    switch(author){
      case "Винсент Ван Гог":{
        return this.getVanGogPictures();
      }
      case "Леонардо да Винчи": {
        return this.getDaVinciPictures();
      }
      case "Микеланджело": {
        return this.getMikhelangeloPictures();
      }
      case "Эдвард Мунк": {
        return this.getMunchPictures();
      }
      case "Ян Вермеер": {
        return this.getVermeerPictures();
      }
      default:
         break;
    }
    return this.getDaVinciPictures();
  }
  public updateAuthorPictures(){
    this.authorPictures = this.getAuthorPicture(this.selectedPicture?.author as string);
  }
}
