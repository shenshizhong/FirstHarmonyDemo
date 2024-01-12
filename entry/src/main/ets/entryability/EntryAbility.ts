import UIAbility from '@ohos.app.ability.UIAbility';
import hilog from '@ohos.hilog';
import window from '@ohos.window';

export default class EntryAbility extends UIAbility {
  onCreate(want, launchParam) {
    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onCreate');
  }

  onDestroy() {
    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onDestroy');
  }

  onWindowStageCreate(windowStage: window.WindowStage) {
    // Main window is created, set main page for this ability
    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onWindowStageCreate');

    windowStage.loadContent('pages/Index', (err, data) => {
      if (err.code) {
        hilog.error(0x0000, 'testTag', 'Failed to load the content. Cause: %{public}s', JSON.stringify(err) ?? '');
        return;
      }
      hilog.info(0x0000, 'testTag', 'Succeeded in loading the content. Data: %{public}s', JSON.stringify(data) ?? '');

      hilog.info(0x0000, 'sszTag', '===========布尔型=========\n');
      //各种类型的初始化
      let isDone: boolean = false;
      hilog.info(0x0000, 'sszTag', 'isDone的值:' + isDone);

      hilog.info(0x0000, 'sszTag', '===========浮点型=========\n');
      //TypeScript 中所有的数字都是浮点数，类型是number
      let decLiteral: number = 2023;
      let binaryLiternal: number = 0b11111100111;
      let octalLiteral : number = 0o3747;   //八进制
      let hexLiteral: number = 0x7e7;  //十六进制
      hilog.info(0x0000, 'sszTag', 'decLiteral的值:' + decLiteral);
      hilog.info(0x0000, 'sszTag', 'binaryLiternal的值:' + binaryLiternal);
      hilog.info(0x0000, 'sszTag', 'octalLiteral的值:' + octalLiteral);
      hilog.info(0x0000, 'sszTag', 'hexLiteral的值:' + hexLiteral);

      hilog.info(0x0000, 'sszTag', '===========字符串型=========\n');
      let name: string = "Jacky";
      name = "Tom";
      name = 'ssz';
      hilog.info(0x0000, 'sszTag', 'name的值:' + name);

      hilog.info(0x0000, 'sszTag', '===========数组=========\n');
      let list1: number[] = [1,2,3];
      hilog.info(0x0000, 'sszTag', 'list1的第一个值:' + list1[0]);

      hilog.info(0x0000, 'sszTag', '===========元组=========\n');
      let x:[string, number];
      x = ['hello', 10];
      hilog.info(0x0000, 'sszTag', 'x中hello对应的值:' + x.pop());

      hilog.info(0x0000, 'sszTag', '===========枚举=========\n');
      enum Color {Red, Green, Blue};
      let c: Color = Color.Green;
      hilog.info(0x0000, 'sszTag', '枚举类Color中蓝色的值:' + Color.Blue);


      //这个是比较特殊的类型，是一种不确定的类型
      hilog.info(0x0000, 'sszTag', '===========unknown类型=========\n');
      let notSure: unknown = 4;
      notSure = 'maybe a string instead';
      notSure = false;
      hilog.info(0x0000, 'sszTag', 'notSure最终的值:' + notSure);

      //这个方法没有类型返回，那么就用void
      hilog.info(0x0000, 'sszTag', '===========void类型=========\n');
      test()

      hilog.info(0x0000, 'sszTag', '===========null 和 undefined=========\n');
      let u: undefined = undefined;
      let n: null = null;
      hilog.info(0x0000, 'sszTag', 'u的值：' + u  + '   n的值：' + n);

      //联合类型就是一个变量可以存储多种类型
      hilog.info(0x0000, 'sszTag', '===========联合类型=========\n');
      let myFavoriteNumber: string|number;
      myFavoriteNumber = 'seven';
      myFavoriteNumber = 7;
      hilog.info(0x0000, 'sszTag', 'myFavoriteNumber最终的值：' + myFavoriteNumber);

      hilog.info(0x0000, 'sszTag', '恭喜你，已经对开发中需要用到的类型有了大体的了解');
    });

    function test(): void{
      hilog.info(0x0000, 'sszTag', '这个方法返回值是 void 类型');
    }
  }

  onWindowStageDestroy() {
    // Main window is destroyed, release UI related resources
    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onWindowStageDestroy');
  }

  onForeground() {
    // Ability has brought to foreground
    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onForeground');
  }

  onBackground() {
    // Ability has back to background
    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onBackground');
  }
}
