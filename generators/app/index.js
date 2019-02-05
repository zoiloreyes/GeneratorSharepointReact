var Generator = require('yeoman-generator');

module.exports = class extends Generator{
    constructor(args, opts){
        super(args, opts);

        this.argument('componentName', {type: String, required: true});
    }

    writing() {
        this.fs.copyTpl(
            this.templatePath("component.tsx"),
            this.destinationPath(this.options.componentName + ".tsx"),
            {componentName: this.options.componentName}
        );

        this.fs.copyTpl(
            this.templatePath("component.module.scss"),
            this.destinationPath(this.options.componentName + ".module.scss"),
            {componentName: this.options.componentName}
        )

        this.fs.copyTpl(
            this.templatePath("Icomponentprops.ts"),
            this.destinationPath( "I" + this.options.componentName + "Props.ts"),
            {componentName: this.options.componentName}
        )

        this.fs.copyTpl(
            this.templatePath("Icomponentstate.ts"),
            this.destinationPath("I" + this.options.componentName + "State.ts"),
            {componentName: this.options.componentName}
        )

    }
};