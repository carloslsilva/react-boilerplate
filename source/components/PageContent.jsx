import React from 'react'
import Title from './Title'
import Paragraph from './Paragraph'
import Picture from './Picture'
import styles from './PageContent.module.scss'

const PageContent = ({ title, content, imgUrl }) => (
  <>
    <header>
      <Title>{title}</Title>
    </header>
    <main className={styles.container}>
      <Paragraph>{content}</Paragraph>
      <Picture src={imgUrl} />
    </main>
  </>
)

export default PageContent
