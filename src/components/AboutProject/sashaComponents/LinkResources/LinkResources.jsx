import { ReactComponent as  DocumentLink } from '../../../../images/icons/document.svg'
import { ReactComponent as  TableLink } from '../../../../images/icons/table.svg'
import { ReactComponent as  VideoLink } from '../../../../images/icons/video.svg'
import classes from './LinkResources.module.css';

export let LinkResources = () => (
  <div className={classes.container}>
    <div className={classes.resource}>
      <div className={classes.resourceIconContainer}>
        <DocumentLink className={classes.resourceIcon} style={{ fill: '#E12F2F' }} />
      </div>
      <div className={classes.resourceTextContainer}>
        <div className={classes.resourceTitle}>
          <span>Эксперименты</span>
          <a href="#" className={classes.buttonDownload}>Скачать</a>
        </div>
        <p className={classes.resourceSubtitle}>Наши эксперты в подробностях описывают каждую из лабораторных работ</p>
      </div>
    </div>
    <div className={classes.resource}>
      <div className={classes.resourceIconContainer}>
        <TableLink className={classes.resourceIcon} style={{ fill: '#327D50' }} />
      </div>
      <div className={classes.resourceTextContainer}>
      <div className={classes.resourceTitle}>
        <span>Рабочие таблицы</span>
        <a href="#" className={classes.buttonDownload}>Скачать</a>
      </div>
        <p className={classes.resourceSubtitle}>Записи постоянно обновляются</p>
      </div>
    </div>
    <div className={classes.resource}>
      <div className={classes.resourceIconContainer}>
        <VideoLink className={classes.resourceIcon} style={{ fill: '#1F95D7' }}/>
      </div>
      <div className={classes.resourceTextContainer}>
      <div className={classes.resourceTitle}>
        <span>Видеоролики</span> 
        <a href="#" className={classes.buttonDownload}>Скачать</a>
      </div>
        <p className={classes.resourceSubtitle}>Команда регулярно выпускает видеоролики с обучающим материалом</p>
      </div>
    </div>
  </div>
)