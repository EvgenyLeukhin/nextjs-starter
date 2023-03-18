import { Container } from '@/components/layout';
import { useEffect, useState } from 'react';
// import { useEffect } from 'react';

const TestPage = () => {
  const [seconds, setSeconds] = useState<number>(new Date().getSeconds());

  // переренер компонента каждую секунду
  useEffect(() => {
    setTimeout(() => {
      setSeconds(new Date().getSeconds());
    }, 1000);
  }, [seconds]);

  return (
    <Container>
      <h2>Test page</h2>

      <ul>
        <li>
          <h4>Получить полную текущую дату: </h4>
          <code>new Date()</code>&nbsp;&ndash;&nbsp;{`${new Date()}`}
          <hr />
        </li>

        <li>
          <h4>Получить текущий год: </h4>
          <code>new Date().getFullYear()</code>&nbsp;&ndash;&nbsp;
          {`${new Date().getFullYear()}`}
          <hr />
        </li>

        <li>
          <h4>Получить текущий месяц (нумерация с нуля): </h4>
          <code>new Date().getMonth()</code>&nbsp;&ndash;&nbsp;
          {`${new Date().getMonth() + 1}`}
          <hr />
        </li>

        <li>
          <h4>Получить текущий день: </h4>
          <code>new Date().getMonth()</code>&nbsp;&ndash;&nbsp;
          {`${new Date().getDate()}`}
          <hr />
        </li>

        <li>
          <h4>Получить день недели (0 - вс, 1 - пн, ...): </h4>
          <code>new Date().getDay()</code>&nbsp;&ndash;&nbsp;
          {`${new Date().getDay()}`}
          <hr />
        </li>

        <li>
          <h4>Получить часы в 24-часовом формате: </h4>
          <code>new Date().getHours()</code>&nbsp;&ndash;&nbsp;
          {`${new Date().getHours()}`}
          <hr />
        </li>

        <li>
          <h4>Получить минуты: </h4>
          <code>new Date().getMinutes()</code>&nbsp;&ndash;&nbsp;
          {`${new Date().getMinutes()}`}
          <hr />
        </li>

        <li>
          <h4>Получить секунды: </h4>
          <code>new Date().getSeconds()</code>&nbsp;&ndash;&nbsp;
          {`${new Date().getSeconds()}`}
          <hr />
        </li>

        <li>
          <h4>Получить милисекунды: </h4>
          <code>new Date().getSeconds()</code>&nbsp;&ndash;&nbsp;
          {`${new Date().getMilliseconds()}`}
          <hr />
        </li>

        <li>
          <h4>Дата отчета в JS: </h4>
          <code>new Date(0)</code>&nbsp;&ndash;&nbsp;
          {`${new Date(0)}`}
          <hr />
        </li>

        <li>
          <h4>Количество пройденных мс от даты отчета: </h4>
          <code>new Date().getTime()</code>&nbsp;&ndash;&nbsp;
          {`${new Date().getTime()}`}
          <hr />
        </li>

        <li>
          <h4>
            Подставить определенную дату без времени (время подставляется
            автоматичеси). <br />
            Форматы: yyyy-MM-dd, MM-dd-yyyy
            <br />
            Разделители: точки, тире, пробелы и слэши.
          </h4>
          <code>new Date(&#34;2017-01-26&#34;)</code>&nbsp;&ndash;&nbsp;
          {`${new Date('2017-01-26')}`} <br />
          <code>new Date(&#34;2017.01.26&#34;)</code>&nbsp;&ndash;&nbsp;
          {`${new Date('2017.01.26')}`} <br />
          <code>new Date(&#34;2017/01/26&#34;)</code>&nbsp;&ndash;&nbsp;
          {`${new Date('2017/01/26')}`} <br />
          <code>new Date(&#34;2017 01 26&#34;)</code>&nbsp;&ndash;&nbsp;
          {`${new Date('2017 01 26')}`} <br />
          <code>new Date(&#34;01-26-2017&#34;)</code>&nbsp;&ndash;&nbsp;
          {`${new Date('01-26-2017')}`} <br />
          <hr />
        </li>

        <li>
          <h4>Извлечь дату из полной строки даты со временем: </h4>
          <code>
            new Date(&#34;Fri Mar 17 2023 17:47:37 GMT+0600 (Омск, стандартное
            время)&#34;).toISOString().split(&#34;T&#34;)[0]
          </code>
          &nbsp;&ndash;&nbsp;
          {`${
            new Date(
              'Fri Mar 17 2023 17:47:37 GMT+0600 (Омск, стандартное время)',
            )
              .toISOString()
              .split('T')[0]
          }`}
          <hr />
        </li>
      </ul>
    </Container>
  );
};

export default TestPage;

// // create tag
// const tag = document.createElement('p');

// // create text content
// tag.innerHTML = `${new Date()}`;
// document.body.appendChild(tag);
