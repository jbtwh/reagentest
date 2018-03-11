(ns reagentest.core
  (:require [reagent.core :as reagent :refer [atom]]
            [reagent-modals.modals :as reagent-modals]
            [ajax.core :refer [GET POST DELETE PUT json-request-format]]))

(enable-console-print!)

(defn by-id
  [elem-id]
  (.getElementById js/document elem-id))

(def val (reagent/atom "foo"))

(defn atom-input
  [value]
  [:input.form-control {:type "text"
                        :value @value
                        :on-change #(reset! value (-> % .-target .-value))}])

(def employees
  (reagent/atom [{"id" 1 "name" "backend 1" "age" 11 "years" 111}
         {"id" 2 "name" "clojure items" "age" 22 "years" 222}
         {"id" 3 "name" "HTTP Kit" "age" 33 "years" 333}]))


(def init-emp {"name" "name" "age" 0 "years" 0})

(def current-emp
  (reagent/atom init-emp))

(defn modaldiv
  [save-fn]
  [:div
    [:div.modal-body.form-group
     [:p "Name: " [:input.form-control {:type "text"
                                        :value (@current-emp "name")
                                        :on-change (fn [e] (reset! current-emp (assoc @current-emp "name" (-> e .-target .-value)))) }]]
     [:p "Age: " [:input#new-age.form-control {:type "number"
                                               :value (@current-emp "age")
                                               :on-change (fn [e] (reset! current-emp (assoc @current-emp "age" (-> e .-target .-value)))) }]]
     [:p "Years: " [:input#new-years.form-control {:type "number"
                                                   :value (@current-emp "years")
                                                   :on-change (fn [e] (reset! current-emp (assoc @current-emp "years" (-> e .-target .-value)))) }]]]
    [:div.modal-footer
     [:div.btn.btn-primary {:on-click (fn [] (save-fn) (reagent-modals/close-modal!))} "Save"]
     [:div.btn.btn-primary {:on-click  #(reagent-modals/close-modal!)} "Close"]]]
   )

(defn error-handler [response]
  (.log js/console (str "ERROR: " response)))

(defn get-all
  []
  (GET "/employees" {:handler (fn [data] (reset! employees data))
                       :error-handler error-handler}))

(defn delete
  [id]
  (when (js/confirm "Sure?")
    (DELETE (str "/delete?id=" id)
            {:handler get-all
             :error-handler error-handler})))

(defn add
  [emp]
  (POST "/create"
        {:params emp
         :handler get-all
         :error-handler error-handler
         :format (json-request-format)}))

(defn update
  [emp]
  (PUT (str "/update?id=" (emp "id"))
        {:params emp
         :handler get-all
         :error-handler error-handler
         :format (json-request-format)}))


(defn get-one
  [id callback]
  (GET (str "/get-one?id=" id)
       {:handler (fn [data] ((reset! current-emp data) (callback)))
                     :error-handler error-handler}))


(defn modal-window-button
  [btn-title & [emp-id]]
  [(if (nil? emp-id) :div.btn.btn-primary :a.btn.btn-default.btn-sm)
   {:on-click (fn []
                (if (nil? emp-id) (do (reset! current-emp init-emp)
                                      (reagent-modals/modal! [modaldiv (fn [] (add @current-emp) (get-all))])
                                      )
                                  (do (get-one emp-id (fn [] (reagent-modals/modal! [modaldiv (fn [] (update @current-emp) (get-all))])))))
                )}
   btn-title])

(defn employees-table
  []
  (when @employees
    [:div
      [:table.table.table-hover.table-condensed
       [:thead
        [:tr
         [:th "id"] [:th "Name"] [:th "Age"] [:th "Years"] [:th "Actions"]]]
       [:tbody
        (for [emp @employees]
          ^{:key (emp "id")}
          [:tr
           [:td (emp "id")] [:td (emp "name")] [:td (emp "age")] [:td (emp "years")]
           [:td [modal-window-button "update" (emp "id")]
           [:a.btn.btn-default.btn-sm {:onClick (fn [] (delete (emp "id")))}
                 [:span.glyphicon.glyphicon-remove] " delete"]]
           ])]]
     ]))

(defn home
  []
  [:div
   [reagent-modals/modal-window]
   [modal-window-button "Add employee"]
   [employees-table]
   ])


(defn ^:export main
  []
  (get-all)
  (reagent/render [home]
                  (.getElementById js/document "app")))

