module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
     myTask: {
        options: {
          engine: 'im',
          newFilesOnly: "",
          sizes: [{
            name: 'lg',
            width: 1200,
            quality: 50
          },{
            name: 'lg-2x',
            width: 2400,
            quality: 50
          },{
            name: 'md',
            width: 800,
            quality: 50
          },{
            name: 'md-2x',
            width: 1600,
            quality: 50
          },{
            name: 'sm',
            width: 400,
            quality: 50
          },{
            name: 'sm-2x',
            width: 800,
            quality: 50
          }]
        },

        /*
        You don't need to change this part if you don't change
        the directory structure.
        */
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'img-src/',
          dest: 'img/'
        }]
      }
    },

    /* Clear out the images directory if it exists */
    clean: {
      dev: {
        src: ['img'],
      },
    },

    /* Generate the images directory if it is missing */
    mkdir: {
      dev: {
        options: {
          create: ['img']
        },
      },
    },

    /* Copy the "fixed" images that don't go through processing into the images/directory */
    copy: {
      dev: {
        files: [{
          expand: true,
          src: 'images-src/fixed/*.{gif,jpg,png}',
          dest: 'img/'
        }]
      },
    },
  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.registerTask('default', ['clean', 'mkdir', 'copy', 'responsive_images']);

};
