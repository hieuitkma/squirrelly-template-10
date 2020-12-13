const container =
    `
<div class="wrap">
    {{it.header | safe}}
    <div class="content">

        <div class="feature">
            <h3 class="feature__title">EXPLORE OUR OUTSTANDING FEATURES</h3>
            <div class="row">
                {{@foreach(it.obj) => key, val}}
                    {{val | safe}}
                {{/foreach}}
            </div>
        </div>
    </div>
</div>
{{! console.log ("Giá trị của it.num là:" + it.num);}}
`

export { container }