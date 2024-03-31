import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams} from 'react-router-dom';
import { selectCurrentCourse } from '../../../store/slices/courses/selectors/currentCourseSelector';
import { getCourseById } from '../../../store/slices/courses/thunks';
import { selectCoursesStatus } from '../../../store/slices/courses/selectors/coursesStatusSelector';
import { STATUS } from '../../../store/slices/config';
import Loading from '../../../components/UI/Loading/Loading';
import Markdown from 'react-markdown';
import classes from "./CoursePage.module.scss";
import { mdComponents } from '../../../markdown';
import remarkGfm from 'remark-gfm';

const CoursePage = () => {

  const {id} = useParams();
  const dispatch = useDispatch();
  const status = useSelector(selectCoursesStatus);
  const course = useSelector(selectCurrentCourse);

  useEffect(() => {
    dispatch(getCourseById(id));
  }, [dispatch, id])

  const md = `# Структуры данных и алгоритмы
  ## Линейные структуры данных
  - ### Списки

  Пример реализации односвязного списка на языке Си:
  \`\`\`C
  typedef int DataType;

void print (DataType x)
{
     printf ("%d ", x);
}

typedef
struct element
{
   DataType data;
   struct element * next;
} node;

node * new_node (node * pnode, DataType x) /*создание нового узла*/
{
       node * temp;
       temp = (node *) malloc (sizeof (node));
       temp->data = x;
       temp->next = pnode;
       return temp;
}/*односвязный линейный список*/

#include <stdio.h>
#include <stdlib.h>

typedef int DataType;

void print (DataType x)
{
     printf ("%d ", x);
}

typedef
struct element
{
   DataType data;
   struct element * next;
} node;

node * new_node (node * pnode, DataType x) /*создание нового узла*/
{
       node * temp;
       temp = (node *) malloc (sizeof (node));
       temp->data = x;
       temp->next = pnode;
       return temp;
}

void del_list (node * begin) /*удаление всего списка*/
{
     node * temp;
     while (begin) /*пока в списке есть элементы*/
     {
           temp = begin;
           begin = begin->next; /*переставляем указатель на следующий элемент*/
           free (temp); /*первый удаляем*/
     }
}

node * delete_node (node * pnode) /*удаление первого элемента*/
{
     node * temp;
     if (pnode) /*если список не пуст*/
     {
           temp = pnode;
           pnode = pnode->next; /*переставляем указатель на следующий элемент*/
           free (temp); /*первый удаляем*/
     }
     return pnode;
}

node * find_node (node * cur, DataType x) /*поиск элемента со значением х*/
{
     while (cur && cur->data != x) /*пока в списке есть элементы и они не равны х*/
           cur = cur->next; /*переставляем указатель на следующий элемент*/
     return cur;
}

node * find_last (node * cur) /*поиск последнего элемента списка*/
{
    if (cur == NULL)
        return NULL;
    while (cur->next)
        cur = cur->next;
    return cur;
}

/*поиск элемента списка, предшествующего элементу со значением, большим или равным х.
Если такого нет, то возвращается адрес последнего элемента списка*/
node * find_prev (node * cur, DataType x)
{
    while (cur->next && cur->next->data < x) /*пока список не закончился и нужный элемент не найден*/
        cur = cur->next;    /*переходим к следующему*/
    return cur; /*возвращаем адрес предшествующего элемента*/
}

node * insert_node (node * begin, DataType x)   /*вставка с учетом упорядоченности*/
{
    node * cur;
    if (begin == NULL)
        return new_node(NULL, x);
    if (begin->data > x)
        return new_node(begin, x);
    cur = find_prev(begin, x);
    cur->next = new_node(cur->next, x);
    return begin;
}

void print_list (node * pnode) /*печать списка*/
{
     if (!pnode) /*если список пуст*/
     {
           printf ("Список пуст\n");
           return;
     }
     while (pnode) /*пока в списке есть элементы*/
     {
           print (pnode->data);
           pnode = pnode->next; /*переставляем указатель на следующий элемент*/
     }
}

void print_list_recursive (node * begin) /*рекурсивная функция печати списка*/
{
     if (begin) /*если есть что выводить*/
     {
        print (begin->data); /*выводим текущее значение*/
        print_list_recursive (begin->next); /*печатаем список, начинающийся со следующего элемента*/
     }
}

void print_list_recursive_back (node * begin) /*рекурсивная функция печати списка в обратном порядке*/
{
     if (begin) /*если есть список*/
     {
        print_list_recursive_back (begin->next); /*печатаем список, начинающийся со следующего элемента*/
        print (begin->data); /*печатаем текущее значение*/
     }
}

int main(int argc, char *argv[])
{
    struct element * begin = NULL, *tmp;
    int a, i;
    printf ("Введите 5 чисел\n");
    for (i=0; i<5; i++)
    {
        scanf ("%d", &a);
        begin = insert_node(begin, a);
    }
    print_list (begin);
    printf ("\n");
    tmp = find_last(begin);
    printf ("Последний элемент списка ");
    print (tmp->data);
    printf ("\n");
    print_list (begin);
    printf ("\n");
    begin = delete_node (begin); /*удаляем первый элемент*/
    print_list (begin);
    printf ("\n");
    printf ("Введите число для поиска\n");
    scanf ("%d", &a);
    tmp = find_node(begin, a);
    if (tmp)
    {
        printf ("Элемент найден");
        tmp=find_prev(begin, a);
        tmp->next = delete_node(tmp->next);/*удаляем найденный элемент*/
        printf (" и удален\n");
    }
    else
        printf ("Такого элемента в списке нет\n");
    print_list (begin);
    printf ("\nРекурсивной функцией:\n");
    print_list_recursive (begin);
    printf ("\nВ обратном порядке:\n");
    print_list_recursive_back (begin);
    printf ("\n");
    del_list (begin);
    return 0;
}

  \`\`\`
  ## Выполните следующие задания по вариантам:
  1. [Задание 1]()
  2. [Задание 2]()
  3. [Задание 3]()
  `

  return (
    <div className={classes.page}>
          <Loading isLoading={status === STATUS.LOADING}>
            <Markdown className={classes.foo} remarkPlugins={[remarkGfm]} components={mdComponents}>{md}</Markdown>
          </Loading>
    </div>

  )
}

export default CoursePage;