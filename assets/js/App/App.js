import { createApp } from 'vue/dist/vue.esm-bundler';
import { mapGetters } from "vuex";
import { registerComponents, registerDirectives } from '../utils/component-utils';

////////////////// Import Components ////////////////////
import CoreComponents from '../../../vendor/widemorph/morph-view-bundle/Resources/assets/js/App/Component/components';
import ImportComponents from '../../../vendor/widemorph/morph-data-import-bundle/Resources/assets/js/App/Component/components';
import CmsEngineComponents from '../../../vendor/widemorph/cms-engine-bundle/Resources/assets/js/App/Component/components';
////////////////// Import Components ////////////////////

////////////////// Import Directives ////////////////////
// import CmsEngineDirectives from '../../../vendor/widemorph/cms-engine-bundle/Resources/assets/js/App/Directive/directives';
////////////////// Import Directives ////////////////////

// Import App store
import Store from './Store';

const app = createApp({
    watch: {
        isSidebarOpen: (newValue) => {
            newValue ? document.getElementsByTagName('body')[0].classList.remove('sidebar-collapse') :
                document.getElementsByTagName('body')[0].classList.add('sidebar-collapse');
        }
    },
    computed: {
        ...mapGetters('core', ['isSidebarOpen']),
    }
})

////////////////// Register Components ////////////////////
registerComponents(app, CoreComponents)
registerComponents(app, ImportComponents)
registerComponents(app, CmsEngineComponents)
////////////////// Register Components ////////////////////

// registerDirectives(app, CmsEngineDirectives)

app.use(Store);

app.mount('#app');
