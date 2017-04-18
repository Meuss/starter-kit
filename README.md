# My :heart:Kirby:heart: Starter Kit

##### *with gulp, scss, browsersync, babel*
Hey, this is my personal kirby starter kit, built so I can start building new websites quickly. Please let me know if I should explain something better/if you got anything to add. Drop me an email at thomas.miller147@gmail.com to say hi :bowtie:

## SETTING UP - Checklists

### Npm packages updates
- `npm i -g npm-check-updates` (or alias "ncu")
- `ncu -u` (to check for updates)
- `ncu -a`(to update package.json)
- `npm install`

### Kirby version updates
- compare latest kirby version and this one (kirby>kirby.php)
- if you need an update, replace the folders **kirby** and **panel** with the new ones.

### Do you need multilanguage?
- [https://getkirby.com/docs/languages/setup](https://getkirby.com/docs/languages/setup)
- change html lang attribute

### Other Remarks

Don't forget to visit the awesome [Kirby docs](https://getkirby.com/docs/languages/setup) and the [Kirby forum](https://forum.getkirby.com/)

###### eslint
- `eslint name-of-file.js --fix`

###### TODOS for this repo
- move the scss from the pages.scss to mixins
- add some initial pages
- maybe add a basic mobile menu snippet, and js toggle logic?
- add webpack
- add mobile detect to body class
- add the body default loading class and javascript logic
- add image compression to gulp flow?
- should I include multilanguage by default?
- should I include the kirby json api?
