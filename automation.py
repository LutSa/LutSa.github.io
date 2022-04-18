from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from webdriver_manager.firefox import GeckoDriverManager # Code 2
import time
from re import search


driver = webdriver.Chrome() # Code 3
driver.get("https://lutsa.github.io")
links = driver.find_elements_by_xpath("//a[@href]")

hrefs=[]
for link in links:
    hrefs.append(link.get_attribute("href"))

for href in hrefs:
    driver.get(href)
    if driver.title.find("404: Not Found") != -1:
        print("404 Not Found: ", href)
        exit(1)
    print("Curent Page: ", driver.title)
    # etc


    # print(elem.get_attribute("href"))


#x = str(continue_link)
#print(continue_link)

driver.close()


