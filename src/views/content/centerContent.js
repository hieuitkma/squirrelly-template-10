const centerContent =
    `
<div class="feature--content feature--content--center">
    <div class="box">
        <img src="{{it.img}}" alt="" class="box__img">
        <div class="box__suggestions">
            <p class="box__suggestions__question">
                {{it.name}}
            </p>
            <p class="box__suggestions__answer">{{it.desc}}
            </p>
        </div>
    </div>
</div>
`

export { centerContent };