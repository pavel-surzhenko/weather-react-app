// Core
import { render } from 'react-dom';
import { QueryClientProvider } from 'react-query';
import { configure } from 'mobx';

// Components
import { App } from './app';
import { Provider } from './lib/Provider';

// Instruments
import './theme/index.scss';
import { queryClient } from './lib/react-query';

configure({
    enforceActions:             'always',
    computedRequiresReaction:   true,
    observableRequiresReaction: true,
    reactionRequiresObservable: true,
});

render(
    <Provider>
        <QueryClientProvider client = { queryClient }>
            <App />
        </QueryClientProvider>
    </Provider>,
    document.getElementById('root'),
    () => {
        // eslint-disable-next-line no-console
        console.log('%c Приложение успешно запущено ', 'background: #00ff00; color: #000000; padding: 2.5px;');
    },
);
