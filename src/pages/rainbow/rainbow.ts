import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {InAppBrowser, InAppBrowserOptions} from "@ionic-native/in-app-browser";
import {BrowserTab} from "@ionic-native/browser-tab";
import {HttpClient} from "@angular/common/http";
import {ParseHtmlProvider} from "../../providers/parse-html/parse-html";

declare var ROOT_URL;

/**
 * Generated class for the RainbowPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// declare var webView: any;
@IonicPage()
@Component({
  selector: 'page-rainbow',
  templateUrl: 'rainbow.html',
})
export class RainbowPage {
  biaobaiList = [];

  favorite = [
    {
      title: '无与伦比的美丽',
      url: 'https://url.cn/5dTyd2M?_wv=1'
    },
    {
      title: '越过山丘',
      url: 'https://url.cn/5vONKxN?_wv=1'
    },
    {
      title: '青鸟与诗',
      url: 'https://url.cn/5zEMkru?_wv=1'
    },
    {
      title: '遇见你的时候所有星星都落到我头上',
      url: 'https://url.cn/5WWHoCK?_wv=1'
    },
    {
      title: 'Pretty Boy',
      url: 'https://url.cn/5HWI9X1?_wv=1'
    },
    {
      title: '致姗姗来迟的你',
      url: 'https://url.cn/54aLD2R?_wv=1'
    },
    {
      title: '小美好',
      url: 'https://url.cn/5lZ6PMC?_wv=1'
    },
    {
      title: '情话微甜',
      url: 'https://url.cn/5dsk1I7?_wv=1'
    },
    {
      title: '이쁘다니까 (你真漂亮)',
      url: 'https://url.cn/5Mkg0AI?_wv=1'
    },
    {
      title: '9420',
      url: 'https://url.cn/5xpXpBn?_wv=1'
    },
    {
      title: '甜了个蜜',
      url: 'https://url.cn/5Wqd3Rc?_wv=1'
    },
    {
      title: '我们之间',
      url: 'https://url.cn/5zaLEmX?_wv=1'
    },
    {
      title: '佛系少女',
      url: 'https://url.cn/5j0nX05?_wv=1'
    },
    {
      title: '甜到爆表',
      url: 'https://url.cn/5SzChct?_wv=1'
    },
    {
      title: '별이 빛나는 밤(Starry night)',
      url: 'https://url.cn/5TFEGXF?_wv=1'
    },
    {
      title: 'LOVE SCENARIO (사랑을 했다)',
      url: 'https://url.cn/5lnA98j?_wv=1'
    },
    {
      title: '약속해요 (I.P.U.) (约定)',
      url: 'https://url.cn/5DltfZN?_wv=1'
    },
    {
      title: '下一秒',
      url: 'https://url.cn/5i8JKvn?_wv=1'
    },
    {
      title: '慢慢喜欢你',
      url: 'https://url.cn/57NKvvJ?_wv=1'
    },
    {
      title: '千禧',
      url: 'https://url.cn/54B1XXZ?_wv=1'
    },
    {
      title: '青柠',
      url: 'https://url.cn/55DtuVr?_wv=1'
    },
    {
      title: '爱的魔法',
      url: 'https://url.cn/5KziOF6?_wv=1'
    },
    {
      title: 'OK歌',
      url: 'https://url.cn/5cMtEiA?_wv=1'
    },
    {
      title: '사랑해요只对你说',
      url: 'https://url.cn/5Z2YzOy?_wv=1'
    },
    {
      title: '一点点喜欢',
      url: 'https://url.cn/5KfkVWB?_wv=1'
    },
    {
      title: '我想',
      url: 'https://url.cn/5H3KEm5?_wv=1'
    },
    {
      title: '우주를 줄게 (给你宇宙)',
      url: 'https://url.cn/5btR1UL?_wv=1'
    },
    {
      title: '每一句都很甜',
      url: 'https://url.cn/5ZwbVp8?_wv=1'
    },
    {
      title: '小流星(《同学两亿岁》网络剧片尾曲)',
      url: 'https://url.cn/5uYd3wl?_wv=1'
    },
    {
      title: '遇到',
      url: 'https://url.cn/59F4GQG?_wv=1'
    },
    {
      title: '莫名奇妙爱上你',
      url: 'https://url.cn/5cA1HZV?_wv=1'
    },
    {
      title: '星晴',
      url: 'https://url.cn/58V2KnX?_wv=1'
    },
    {
      title: '小永远',
      url: 'https://url.cn/52LlauF?_wv=1'
    },
    {
      title: '因为你',
      url: 'https://url.cn/5onjJHV?_wv=1'
    },
    {
      title: '鸽子',
      url: 'https://url.cn/5MbiJki?_wv=1'
    },
    {
      title: '雀跃',
      url: 'https://url.cn/5S6LR5a?_wv=1'
    },
    {
      title: '与妻书',
      url: 'https://url.cn/5gs3apC?_wv=1'
    },
    {
      title: '比心',
      url: 'https://url.cn/5pc0DUX?_wv=1'
    },
    {
      title: '私奔',
      url: 'https://url.cn/5nyKcl7?_wv=1'
    },
    {
      title: '四分之三的恋爱',
      url: 'https://url.cn/5SQIII8?_wv=1'
    },
    {
      title: '超级喜欢你',
      url: 'https://url.cn/5qYH2ru?_wv=1'
    },
    {
      title: '当你',
      url: 'https://url.cn/5v0fKtT?_wv=1'
    },
    {
      title: '初见',
      url: 'https://url.cn/5PHBrGt?_wv=1'
    },
    {
      title: 'I Miss You',
      url: 'https://url.cn/5nYmGMJ?_wv=1'
    },
    {
      title: '小清新',
      url: 'https://url.cn/5mn0NCc?_wv=1'
    },
    {
      title: '东西',
      url: 'https://url.cn/5l7SUOo?_wv=1'
    },
    {
      title: '小宇',
      url: 'https://url.cn/5krFk2J?_wv=1'
    },
    {
      title: '让我为你唱一首歌',
      url: 'https://url.cn/5EY8Ps0?_wv=1'
    },
    {
      title: '小岁月太着急',
      url: 'https://url.cn/5wnrBNL?_wv=1'
    },
    {
      title: '寻萤',
      url: 'https://url.cn/52nPqr0?_wv=1'
    },
    {
      title: '坐在巷口的那对男女',
      url: 'http://music.163.com/song/394653/?userid=533707894'
    },
    {
      title: '我多喜欢你，你会知道',
      url: 'http://music.163.com/song/509518010/?userid=533707894'
    },
    {
      title: '我乐意',
      url: 'http://music.163.com/song/554191378/?userid=533707894'
    },
    {
      title: '我喜欢你胜过削好的水果周末的零食延后的死线冰镇西瓜',
      url: 'http://music.163.com/song/434070103/?userid=533707894'
    },
    {
      title: '晚安喵',
      url: 'http://music.163.com/song/28875230/?userid=533707894'
    },
    {
      title: '我乐意',
      url: 'http://music.163.com/song/554191378/?userid=533707894'
    }
    ];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private iab: InAppBrowser,
              private browserTab: BrowserTab,
              private http: HttpClient,
              private parseHtml: ParseHtmlProvider) {
  }

  srctest = ROOT_URL + '/sys/picture?url='+ encodeURIComponent('http://b19.photo.store.qq.com/psb?/V11Xtz6l1embFM/qclOwClV.YrQxM6pWmyM8EGOas4fC01aG4V4.CodSFs!/b/dBMAAAAAAAAA&amp;bo=hwOTA4cDkwMRECc!');

  ionViewDidLoad() {
    console.log('ionViewDidLoad RainbowPage');
    this.getRemoteData();

    // this.http.get("http://b19.photo.store.qq.com/psb?/V11Xtz6l1embFM/qclOwClV.YrQxM6pWmyM8EGOas4fC01aG4V4.CodSFs!/b/dBMAAAAAAAAA&amp;bo=hwOTA4cDkwMRECc!").subscribe(res => {
    //   console.log(res);
    // })
    //
    // this.http.get('https://github.com/fatedier/frp/blob/master/README_zh.md').subscribe(res => {
    //   console.log(res)
    // })
  }

  getRemoteData(params = {}){
    this.http.post(ROOT_URL + "/sys/sweet/wall/list?page=1",{params: params}).subscribe(res => {
      console.log(res);
      if (res['code'] == 0){
        this.biaobaiList = res['data']['list'];

        this.biaobaiList.map(item => {
          // item.createTime = timestampToTime(item.createTime.$date);
          item.content = item.content;
          item.authorImg = 'assets/imgs/biaobai.jpg';
          item.authorName = '表白墙';
          item.info = JSON.parse(item.info)
          console.log(item)
          return item;
        })
      }
    })
  }

  browserOptions: InAppBrowserOptions = {
    // hideurlbar: "yes",
    // mediaPlaybackRequiresUserAction: "yes",
    // allowInlineMediaPlayback: "yes"
  }

  browMusic(url: string){

    // if(url.startsWith('https')){
    //   url = url.replace('https','http')
    // }

    // alert(url);
    this.browserTab.isAvailable()
      .then(isAvailable => {
        if (isAvailable) {
          this.browserTab.openUrl(url).then(value => {
            // console.log(value);
          });
        } else {
          alert("browser no support launched by iab?")
          const browser = this.iab.create(url,'_self',this.browserOptions);

          // browser.on('loadstop').subscribe(res => {
          //   console.log(res.url);
          //   alert(res.message);
          //   alert(res.url);
          //   alert(res.type)
          // })
          // open URL with InAppBrowser instead or SafariViewController
        }
      });

    // const browser = this.iab.create(url);
    //
    // // browser.executeScript(...);
    //
    // // browser.insertCSS(...);
    // browser.on('loadstop').subscribe(event => {
    //   alert(event)
    //   browser.insertCSS({ code: "body{color: red;" });
    // });

    // browser.close();

  }
  urlFilter(url){
    // if(url.startsWith('https')){
    //   url = url.replace('https','http')
    // }
    return url;
  }

  pet = 'puppies'

}

