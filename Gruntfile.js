module.exports = function(grunt) {

  	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {                            // Task
			dist: {                          // Target
				files: {                         // Dictionary of files
					'main.css' : 'src/styles/main.scss' 
				}
			}
		},
		responsive_images: {
		makeResponsive: {
		  options: {
		    sizes: [{
              name: '320w',
		      width: 320
		    },{
		      name: '480w',
		      width: 480
		    },{
		      name: '800w',
              width: 800
		    },{
              name: '1200w',
              width: 1200
            }]
		  },
		  files: [{
		    expand: true,
		    src: ['assets/**.{jpg,png,gif}'],
            dest: 'build/'
		  }]
		}
		},
	});
    grunt.loadNpmTasks('grunt-responsive-images');

	grunt.loadNpmTasks('grunt-contrib-sass');

	grunt.registerTask('default', ['sass','responsive_images']);

};

