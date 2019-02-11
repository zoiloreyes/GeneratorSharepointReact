var Generator = require('yeoman-generator');

module.exports = class extends Generator{
    constructor(args, opts){
        super(args, opts);

        this.argument('webPart', {type: String, required: true});
        this.argument('componentName', {type: String, required: true});
    }

    writing() {
        this.fs.copyTpl(
            this.templatePath("component.tsx"),
            this.destinationPath(`src/webparts/${this.options.webPart}/components/${this.options.componentName}/${this.options.componentName}.tsx`),
            {componentName: this.options.componentName}
        );

        this.fs.copyTpl(
            this.templatePath("component.module.scss"),
            this.destinationPath(`src/webparts/${this.options.webPart}/components/${this.options.componentName}/${this.options.componentName}.module.scss`),
            {componentName: this.options.componentName}
        )

        this.fs.copyTpl(
            this.templatePath("Icomponentprops.ts"),
            this.destinationPath(`src/webparts/${this.options.webPart}/components/${this.options.componentName}/I${this.options.componentName}Props.ts`),
            {componentName: this.options.componentName}
        )

        this.fs.copyTpl(
            this.templatePath("Icomponentstate.ts"),
            this.destinationPath(`src/webparts/${this.options.webPart}/components/${this.options.componentName}/I${this.options.componentName}State.ts`),
            {componentName: this.options.componentName}
        )

    }
};