/**
 * Created by sebastian.mahr on 02.08.16.
 * WOULD BE CREAT IF THIS IS WORKING
 */

module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        jshint: {
            all: ["*.*"],
            reporter: require('jshint-stylish')
        },
        copy: {
            hooks: {
                expand: true,
                cwd: "git-hooks",
                src: "pre-commit",
                dest: ".git/hooks/",
                options: {
                    mode: true
                }
            }
        },
        clean: {
            // Clean any pre-commit hooks in .git/hooks directory
            hooks: ['.git/hooks/pre-commit']
        }
    });
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    // Clean the .git/hooks/pre-commit file then copy in the latest version
    grunt.registerTask('hookmeup', ['clean:hooks', 'copy:hooks']);

};
