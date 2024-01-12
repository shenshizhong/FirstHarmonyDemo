@Entry
@Component
struct Index {
  @State message: string = 'Hello World'

  build() {
    Row() {
      Column() {
        Text(this.message)
          .fontSize(50)
          .fontWeight(FontWeight.Bold)

        Button("我是按钮")
          .fontColor(Color.Red)
          .fontWeight(FontWeight.Bold)

        Image($r('app.media.icon'))
          .width(50)
          .objectFit(ImageFit.Contain)
          .animation({
            duration: 2000,
            tempo: 3.0,
            delay: 400,
            curve:Curve.Linear,
            playMode: PlayMode.Alternate,
            iterations: -1,
          })
      }
      .width('100%')
    }
    .height('100%')
  }
}