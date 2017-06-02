module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
     myTask: {
        options: {
          engine: 'im',
          newFilesOnly: 1,
          sizes: [{
            name: '200',
            width: 200,
            quality: 50
          },{
            name: '400',
            width: 400,
            quality: 50
          },{
            name: '800',
            width: 800,
            quality: 50
          },{
            name: '1600',
            width: 1600,
            quality: 50
          },{
            name: '3200',
            width: 3200,
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
