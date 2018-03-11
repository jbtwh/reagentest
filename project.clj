(defproject reagentest "0.1.0-SNAPSHOT"
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.8.51"]
                 [reagent "0.5.1"]
                 [cljs-ajax "0.7.3"]
                 [org.clojars.frozenlock/reagent-modals "0.2.3"]
                 [org.clojars.frozenlock/reagent-table "0.1.5"]
                 [cheshire "5.8.0"]
                 [compojure "1.4.0"]
                 [ring/ring-jetty-adapter "1.4.0"]
                 [environ "1.0.0"]
                 [de.flapdoodle.embed/de.flapdoodle.embed.mongo "2.0.3"]
                 [c3p0/c3p0 "0.9.1.2"]
                 [org.clojure/java.jdbc "0.2.3"]
                 [com.h2database/h2 "1.3.168"]
                 [ch.qos.logback/logback-classic "1.1.3"]
                 [org.clojure/data.json "0.2.6"]]

  :source-paths ["src/clj"]
  :uberjar-name "reagentest-standalone.jar"

  :min-lein-version "2.7.1"

  :plugins [[lein-cljsbuild "1.1.7"]
            [environ/environ.lein "0.3.1"]]
  :hooks [environ.leiningen.hooks
          leiningen.cljsbuild
          ]
  :clean-targets ^{:protect false} ["resources/public/js/compiled" "resources/public/js/out" "target" "test/js"]

  :cljsbuild {:builds [{:id "prod"
                        :source-paths ["src/cljs"]
                        :compiler {:output-to "resources/public/js/compiled/app.js"
                                   :output-dir "resources/public/js/compiled/out"
                                   :main "reagentest.core"
                                   :asset-path "/public/js/compiled/out"
                                   :optimizations :none
                                   :pretty-print true}}]}
  :profiles {:production {:env {:production true}}})
