import { widgetsUrlData } from '../../widgetsUrlData.mock';
import { buttonTemplate } from '../../components/button/button.template';
import { spinerTemplate } from '../../components/spiner/spiner.template';
import { runWidgetsInSequence } from '../../utils/runWidgetsInSequence/runWidgetsInSequence';
import { IWidgetsUrlData } from '../../utils/runWidgetsInSequence/runWidgetsInSequence.interface';

export const loadWidgetUrlData = (): Promise<IWidgetsUrlData[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        return resolve(widgetsUrlData);
      } else {
        return reject(new Error('Somethink went wrong while loading widget url data'))
      }
    }, 1000);
  });
};

export const loadWidgets = async (): Promise<void> => {
  const app = document.getElementById('app');
  if (!app) return;

  app.innerHTML = `
    <div class="viewportCenter">
      ${spinerTemplate()}
    </div>
  `;

  try {
    const widgetsUrlData: IWidgetsUrlData[] = await loadWidgetUrlData();
    runWidgetsInSequence(widgetsUrlData);
    app.innerHTML = '';
  } catch(error) {
    app.innerHTML = `
      <div class="viewportCenter">
        <h1 style="color: var(--error)">
          ${error.message}
        </h1>

        ${buttonTemplate('ReloadWidgets', 'Reload Widgets')}
      </div>
    `;

    document.getElementById('ReloadWidgets')?.addEventListener('click', () => {
      loadWidgets();
    })
  }
};