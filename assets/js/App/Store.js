import {createStore} from 'vuex'

import CORE from '../../../vendor/widemorph/morph-view-bundle/Resources/assets/js/App/Store/Core/store';
import DataImport from '../../../vendor/widemorph/morph-data-import-bundle/Resources/assets/js/App/Store/DataImport/store';
import CmsEngine from '../../../vendor/widemorph/cms-engine-bundle/Resources/assets/js/App/Store/store';

export default createStore({
    modules: {
        'core': CORE,
        'dataImport': DataImport,
        'cmsEngine': CmsEngine,
    }
})
