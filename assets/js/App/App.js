import { createApp } from 'vue/dist/vue.esm-bundler';
import { mapGetters } from "vuex";
import { registerComponents } from '../utils/component-utils';

// Import modules component
import CoreComponents from '../../../vendor/widemorph/morph-view-bundle/Resources/assets/js/App/Component/components';
import ImportComponents from '../../../vendor/widemorph/morph-data-import-bundle/Resources/assets/js/App/Component/components';

// Import modules store
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

registerComponents(app, CoreComponents)
registerComponents(app, ImportComponents)

app.use(Store);

app.mount('#app');
