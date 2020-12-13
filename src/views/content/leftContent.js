const leftContent =
    `
<div class="feature--content feature--content--left">
    <div class="box">
            {{@each(it.someArray) => val, index}}
                <span>{{val}}</span>
            {{/each}}
            
        <img src="{{it.icon1}}" alt="" class="box__icon">
        <h3 class="box__name">
            {{@if(it.name1 === "Nguyễn Minh Hiếu")}}
                Nguyễn Thu Hà
            {{#else}}
                Nguyễn Minh Tít
            {{/if}}
        </h3>
        <p class="box__desc">{{it.desc1}}</p>
    </div>
    <div class="box">
        <p>Đây là lastname của tôi {{it.user.some.data.property.nested}} </p>
        <img src="{{it.icon2}}" alt="" class="box__icon">
        <h3 class="box__name">{{it.name2}}</h3>
        <p class="box__desc">{{it.desc2}}</p>
    </div>
    <div class="box">
        <img src="{{it.icon3}}" alt="" class="box__icon">
        <h3 class="box__name">{{it.name3}}</h3>
        <p class="box__desc">{{it.desc3}}</p>
    </div>
    <div class="box">
        <img src="{{it.icon4}}" alt="" class="box__icon">
        <h3 class="box__name">{{it.name4}}</h3>
        <p class="box__desc">{{it.desc4}}</p>
    </div>
</div>
`

export { leftContent };